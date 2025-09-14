import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { BaseNode } from './BaseNode';
import type { NodeData } from '../../types/workflow';
import Icon from '../icons/Icon';
import { WorkflowNodeTypes } from '../../config/workflow';

interface TerminalNodeProps {
  data: NodeData;
  selected: boolean;
}

const TerminalNode = ({ data, selected }: TerminalNodeProps) => (
  <BaseNode
    data={data}
    selected={selected}
    workflowType={WorkflowNodeTypes.TerminalNode}
    targetConnectionCount={4}
    sourceConnectionCount={0}
    icon={
      <Icon color="#ffe6f3">
        <RocketLaunchIcon sx={{ color: '#ec4899' }} />
      </Icon>
    }
  />
);

export default TerminalNode;
