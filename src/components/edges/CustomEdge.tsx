import React, { useCallback } from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  // useStore,
  useReactFlow,
  type Edge,
  type EdgeProps,
  type Node,
} from '@xyflow/react';
import { Button } from '@mui/material';
import { getPath } from '../../utils/edge';

export type CustomEdge<T extends Node = Node> = Edge<{
  key?: keyof T['data'];
}>;

const CustomEdge = ({
  id,
  markerEnd,
  // source,
  sourcePosition,
  sourceX,
  sourceY,
  style,
  targetPosition,
  targetX,
  targetY,
}: EdgeProps<CustomEdge>) => {
  // const nodeData = useStore((state) => state.nodeLookup.get(source)?.data);
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onRemoveEdge = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!id) return;
      setEdges((edges) => edges.filter((edge) => edge.id !== id));
    },
    [id, setEdges],
  );

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
        >
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={onRemoveEdge}
          >
            X
          </Button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
