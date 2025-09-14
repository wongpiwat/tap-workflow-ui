import { PlayCircleOutline } from '@mui/icons-material';

import { BaseNode } from './BaseNode';
import type { NodeData } from '../../types/workflow';
import Icon from '../icons/Icon';
import { WorkflowNodeTypes } from '../../config/workflow';

interface StartNodeProps {
  data: NodeData;
  selected: boolean;
}

const StartNode = ({ data, selected }: StartNodeProps) => (
  <BaseNode
    data={data}
    selected={selected}
    workflowType={WorkflowNodeTypes.StartNode}
    targetConnectionCount={0}
    sourceConnectionCount={1}
    icon={
      <Icon color="#e8f0ff">
        <PlayCircleOutline sx={{ color: '#2563eb' }} />
      </Icon>
    }
  />
);

export default StartNode;
