import { Box, Stack, Divider } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';

import Menu from '../menus/Menu';

interface LeftSidebarProps {
  onClickStart: () => void;
  onClickAction: () => void;
  onClickDecision: () => void;
  onClickTerminal: () => void;
}

const LeftSidebar = ({
  onClickStart,
  onClickAction,
  onClickDecision,
  onClickTerminal,
}: LeftSidebarProps) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 80,
        left: 16,
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: 2,
        padding: 1.25,
        boxShadow: 3,
        zIndex: 1,
      }}
    >
      <Box>
        <Stack spacing={1}>
          <Menu
            label="Start"
            icon={<PlayCircleOutlineIcon sx={{ color: '#2563eb' }} />}
            color="#e8f0ff"
            onClick={onClickStart}
          />
          <Menu
            label="Action"
            icon={<AutoFixHighIcon sx={{ color: '#f59e0b' }} />}
            color="#fff4e5"
            onClick={onClickAction}
          />
          <Menu
            label="Decision"
            icon={<ForkRightIcon sx={{ color: '#10b981' }} />}
            color="#e7f7f1"
            onClick={onClickDecision}
          />
          <Menu
            label="Terminal"
            icon={<RocketLaunchIcon sx={{ color: '#ec4899' }} />}
            color="#ffe6f3"
            onClick={onClickTerminal}
          />
        </Stack>
      </Box>

      <Box>
        <Divider />
        <Menu
          label="Settings"
          icon={<SettingsIcon sx={{ color: '#6b7280' }} />}
          color="#f3f4f6"
        />
      </Box>
    </Box>
  );
};

export default LeftSidebar;
