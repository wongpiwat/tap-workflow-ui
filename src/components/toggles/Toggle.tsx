import { IconButton, Tooltip } from '@mui/material';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ToggleProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  collapsed: boolean;
  onClick: () => void;
}

const Toggle = ({ title, size, collapsed, onClick }: ToggleProps) => {
  return (
    <Tooltip title={title}>
      <IconButton size={size} onClick={onClick}>
        {collapsed ? (
          <ArrowDropDownIcon fontSize={size} />
        ) : (
          <ArrowDropUpIcon fontSize={size} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Toggle;
