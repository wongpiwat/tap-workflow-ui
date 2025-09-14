import { useCallback, useState } from 'react';
import { Box } from '@mui/material';

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Node,
  type Edge,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
  type NodeMouseHandler,
  type NodeTypes,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import MainAppBar from './components/appbars/MainAppBar';
import LeftSidebar from './components/sidebars/LeftSidebar';
import RightSidebar from './components/sidebars/RightSidebar';

import StartNode from './components/nodes/StartNode';
import ActionNode from './components/nodes/ActionNode';
import DecisionNode from './components/nodes/DecisionNode';
import TerminalNode from './components/nodes/TerminalNode';
import CustomEdge from './components/edges/CustomEdge';

import {
  initialEdges,
  initialNodes,
  WorkflowNodeTypes,
  WorkflowNodeTypesMap,
} from './config/workflow';

const nodeTypes: NodeTypes = {
  startNode: StartNode,
  actionNode: ActionNode,
  decisionNode: DecisionNode,
  terminalNode: TerminalNode,
};

const edgeTypes = {
  data: CustomEdge,
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { updateNodeData } = useReactFlow();

  // console.log('[DEBUG] selectedNode', selectedNode);

  const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  }, []);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge(
          { ...params, type: 'data', data: { path: 'bezier' } },
          edgesSnapshot,
        ),
      ),
    [],
  );

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const addNode = useCallback((type: WorkflowNodeTypes) => {
    setNodes((prev) => {
      const random = Math.floor(Math.random() * 1000);
      const id = `node-${random}`;
      const y = 120 + (random % 8) * 120;
      const x = 600;

      const newNode: Node = {
        id,
        type: type,
        position: { x, y },
        data: {
          label: WorkflowNodeTypesMap[type] ?? 'Node',
          description: '',
        },
      };
      return [...prev, newNode];
    });
  }, []);

  const onSaveData = useCallback(
    (id: string, fields: Partial<Record<string, unknown>>) => {
      updateNodeData(id, () => fields);
    },
    [updateNodeData],
  );

  return (
    <Box>
      {/* App Bar */}
      <MainAppBar />

      {/* Left Sidebar */}
      <LeftSidebar
        onClickStart={() => addNode(WorkflowNodeTypes.StartNode)}
        onClickAction={() => addNode(WorkflowNodeTypes.ActionNode)}
        onClickDecision={() => addNode(WorkflowNodeTypes.DecisionNode)}
        onClickTerminal={() => addNode(WorkflowNodeTypes.TerminalNode)}
      />

      {/* Workflow Area */}
      <Box
        sx={{ flexGrow: 1, height: 'calc(100vh)', backgroundColor: '#f7f7f9' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodeClick={onNodeClick}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{ top: 42 }}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </Box>

      {/* Right Drawer */}
      <RightSidebar
        open={drawerOpen}
        onClose={handleCloseDrawer}
        selectedNode={selectedNode}
        onSaveData={(id, data) => onSaveData(id, { ...data })}
      />
    </Box>
  );
};

export default App;
