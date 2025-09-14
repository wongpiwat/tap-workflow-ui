import React, { memo, useState } from 'react';
import { Position, useNodeId, useReactFlow } from '@xyflow/react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  CardActions,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import CustomHandle from '../handles/CustomHandle';

import type { NodeData } from '../../types/workflow';
import { WorkflowNodeTypes } from '../../config/workflow';

export interface BaseNodeProps {
  data?: NodeData;
  selected?: boolean;
  workflowType: WorkflowNodeTypes;
  targetConnectionCount?: number;
  sourceConnectionCount?: number;
  icon?: React.ReactNode;
}

export const BaseNode = ({
  data,
  selected,
  workflowType,
  targetConnectionCount,
  sourceConnectionCount,
  icon,
}: BaseNodeProps) => {
  const nodeId = useNodeId() as string;
  const { setNodes } = useReactFlow();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = () => {
    setNodes((prev) => prev.filter((node) => node.id !== nodeId));
    handleMenuClose();
  };

  const label = data?.label;
  const description = data?.description;

  const isNotStartNode = !workflowType.includes(WorkflowNodeTypes.StartNode);
  const isNotTerminalNode = !workflowType.includes(
    WorkflowNodeTypes.TerminalNode,
  );

  return (
    <Stack>
      {isNotStartNode && (
        <CustomHandle
          id={nodeId}
          type="target"
          position={Position.Top}
          connectionCount={targetConnectionCount}
          style={{ top: -6 }}
        />
      )}

      {/* Card */}
      <Card
        sx={{
          px: 2,
          py: 1,
          minWidth: 180,
          minHeight: 100,
          border: '1px solid #e5e7eb',
          borderRadius: 2,
          '&:hover': {
            boxShadow: 4,
          },
          ...(selected && {
            border: '1px solid #2563eb',
            boxShadow: 6,
          }),
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Icon and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {icon}
            {label && (
              <Typography
                variant="subtitle1"
                color="text.primary"
                fontWeight={600}
              >
                {label}
              </Typography>
            )}
          </Box>

          {/* Menu */}
          <CardActions sx={{ px: 0 }}>
            <IconButton size="small" onClick={handleMenuOpen}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              elevation={4}
            >
              <MenuItem onClick={handleRemove} sx={{ color: 'error.main' }}>
                Remove node
              </MenuItem>
            </Menu>
          </CardActions>
        </Box>

        {/* Body */}
        <CardContent sx={{ p: 0 }}>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>

      {isNotTerminalNode && (
        <CustomHandle
          id={nodeId}
          type="source"
          position={Position.Bottom}
          connectionCount={sourceConnectionCount}
          style={{
            bottom: -6,
          }}
        />
      )}
    </Stack>
  );
};

export default memo(BaseNode);
