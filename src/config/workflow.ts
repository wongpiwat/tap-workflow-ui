import { type Edge, type Node } from '@xyflow/react';

export enum WorkflowNodeTypes {
  StartNode = 'startNode',
  ActionNode = 'actionNode',
  DecisionNode = 'decisionNode',
  TerminalNode = 'terminalNode',
}

export const WorkflowNodeTypesMap = {
  [WorkflowNodeTypes.StartNode]: 'Start',
  [WorkflowNodeTypes.ActionNode]: 'Action',
  [WorkflowNodeTypes.DecisionNode]: 'Decision',
  [WorkflowNodeTypes.TerminalNode]: 'Terminal',
};

export enum WorkflowEdgeTypes {
  Data = 'data',
}

export const initialNodes: Node[] = [
  {
    id: 'n1',
    type: WorkflowNodeTypes.StartNode,
    position: { x: 200, y: 100 },
    data: { label: 'Start', description: 'Start node', config: {} },
  },
  {
    id: 'n2',
    type: WorkflowNodeTypes.ActionNode,
    position: { x: 200, y: 300 },
    data: { label: 'Middle', description: 'Middle node' },
  },
  {
    id: 'n3',
    type: WorkflowNodeTypes.DecisionNode,
    position: { x: 200, y: 500 },
    data: { label: 'Decision', description: 'Decision node' },
  },
  {
    id: 'n4',
    type: WorkflowNodeTypes.ActionNode,
    position: { x: 50, y: 700 },
    data: { label: 'Action 1', description: 'Action node' },
  },
  {
    id: 'n5',
    type: 'actionNode',
    position: { x: 400, y: 700 },
    data: { label: 'Action 2', description: 'Action node' },
  },
  {
    id: 'n6',
    type: WorkflowNodeTypes.TerminalNode,
    position: { x: 200, y: 1100 },
    data: { label: 'Terminal', description: 'Terminal node' },
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'n1-n2',
    type: WorkflowEdgeTypes.Data,
    source: 'n1',
    target: 'n2',
    sourceHandle: 'n1',
    targetHandle: 'n2',
  },
  {
    id: 'n2-n3',
    type: WorkflowEdgeTypes.Data,
    source: 'n2',
    target: 'n3',
    sourceHandle: 'n2',
    targetHandle: 'n3',
  },
  {
    id: 'n3-n4',
    type: WorkflowEdgeTypes.Data,
    source: 'n3',
    target: 'n4',
    sourceHandle: 'n3',
    targetHandle: 'n4',
  },
  {
    id: 'n3-n5',
    type: WorkflowEdgeTypes.Data,
    source: 'n3',
    target: 'n5',
    sourceHandle: 'n3',
    targetHandle: 'n5',
  },
  {
    id: 'n4-n6',
    type: WorkflowEdgeTypes.Data,
    source: 'n4',
    target: 'n6',
    sourceHandle: 'n4',
    targetHandle: 'n6',
  },
  {
    id: 'n5-n6',
    type: WorkflowEdgeTypes.Data,
    source: 'n5',
    target: 'n6',
    sourceHandle: 'n5',
    targetHandle: 'n6',
  },
];
