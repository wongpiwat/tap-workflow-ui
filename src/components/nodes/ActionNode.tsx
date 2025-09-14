import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import { BaseNode } from './BaseNode';
import type { NodeData } from '../../types/workflow';
import Icon from '../icons/Icon';
import { WorkflowNodeTypes } from '../../config/workflow';

interface ActionNodeProps {
  data: NodeData;
  selected: boolean;
}

const ActionNode = ({ data, selected }: ActionNodeProps) => (
  <BaseNode
    data={data}
    selected={selected}
    workflowType={WorkflowNodeTypes.ActionNode}
    targetConnectionCount={1}
    sourceConnectionCount={1}
    icon={
      <Icon color="#fff4e5">
        <AutoFixHighIcon sx={{ color: '#f59e0b' }} />
      </Icon>
    }
  />
);

export default ActionNode;
