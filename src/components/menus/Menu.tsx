import React from 'react';
import { Stack, ButtonBase, Typography } from '@mui/material';
import Icon from '../icons/Icon';

interface MenuProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const Menu = ({ label, icon, color, onClick }: MenuProps) => (
  <ButtonBase
    onClick={onClick}
    sx={{
      '&:hover': { backgroundColor: '#f5f5f7' },
      borderRadius: 2,
      padding: 1,
    }}
  >
    <Stack alignItems="center">
      <Icon color={color}>{icon}</Icon>
      <Typography variant="body2" color="text.primary">
        {label}
      </Typography>
    </Stack>
  </ButtonBase>
);

export default Menu;
