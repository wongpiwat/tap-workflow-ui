import React from 'react';

import { Box } from '@mui/material';

interface IconProps {
  children: React.ReactNode;
  color: string;
}

const Icon = ({ children, color }: IconProps) => (
  <Box
    sx={{
      width: 36,
      height: 36,
      borderRadius: 2,
      backgroundColor: color,
      display: 'grid',
      placeItems: 'center',
    }}
  >
    {children}
  </Box>
);

export default Icon;
