import { useMemo } from 'react';
import { Handle, useNodeConnections, type HandleProps } from '@xyflow/react';

interface CustomHandleProps {
  id: string;
  type: 'source' | 'target';
  connectionCount?: number;
}

type CustomHandleType = HandleProps & CustomHandleProps;

const CustomHandle = ({
  id,
  type,
  connectionCount,
  ...rest
}: CustomHandleType) => {
  const connections = useNodeConnections({
    handleType: type,
    handleId: id,
  });

  const isConnectable = useMemo(() => {
    return connectionCount ? connections.length < connectionCount : true;
  }, [connections, connectionCount]);

  // console.log('[DEBUG] connections', type, connections, isConnectable);

  return <Handle type={type} id={id} isConnectable={isConnectable} {...rest} />;
};

export default CustomHandle;
