import ForkRightIcon from '@mui/icons-material/ForkRight';

import { BaseNode } from './BaseNode';
import type { NodeData } from '../../types/workflow';
import Icon from '../icons/Icon';
import { WorkflowNodeTypes } from '../../config/workflow';

interface DecisionNodeProps {
  data: NodeData;
  selected: boolean;
}

const DecisionNode = ({ data, selected }: DecisionNodeProps) => (
  <BaseNode
    data={data}
    selected={selected}
    workflowType={WorkflowNodeTypes.DecisionNode}
    targetConnectionCount={1}
    sourceConnectionCount={4}
    icon={
      <Icon color="#e7f7f1">
        <ForkRightIcon sx={{ color: '#10b981' }} />
      </Icon>
    }
  />
);

export default DecisionNode;
