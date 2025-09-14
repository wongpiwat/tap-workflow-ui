import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  TextField,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface RightSidebarProps {
  open: boolean;
  onClose: () => void;
  selectedNode?: any;
  onSaveData: (id: string, data: any) => void;
}

const RightSidebar = ({
  open,
  onClose,
  selectedNode,
  onSaveData,
}: RightSidebarProps) => {
  const [configText, setConfigText] = useState('');

  useEffect(() => {
    const cfg = selectedNode?.data ?? {};
    try {
      setConfigText(JSON.stringify(cfg, null, 2));
    } catch {
      setConfigText('');
    }
  }, [selectedNode]);

  const nodeTitle = useMemo(() => {
    return `${selectedNode?.type ?? ''} (${selectedNode?.id ?? ''})`;
  }, [selectedNode]);

  const handleSave = () => {
    try {
      const parsed = configText ? JSON.parse(configText) : {};
      onSaveData(selectedNode.id, parsed);

      // format JSON
      setConfigText(JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.error(e);
      alert('Invalid JSON format');
    }
  };

  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: 440,
          padding: 2,
          marginTop: 8,
          overflow: 'auto',
          border: '1px solid #e5e7eb',
        },
        zIndex: 1,
      }}
    >
      <Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" color="text.primary">
            Node Details
          </Typography>
          <IconButton edge="start" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {selectedNode ? (
          <Stack
            spacing={2}
            p={2}
            sx={{
              height: 'calc(80vh)',
              overflowY: 'auto',
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Selected
              </Typography>
              <Typography variant="body1" color="text.primary">
                {nodeTitle}
              </Typography>
            </Box>

            {/* View / Edit */}
            <Divider>
              <Chip label="View / Edit" size="small" />
            </Divider>

            <TextField
              label="Config (JSON)"
              multiline
              minRows={8}
              fullWidth
              value={configText}
              onChange={(e) => setConfigText(e.target.value)}
            />

            <Button variant="contained" onClick={handleSave} fullWidth>
              Save
            </Button>

            {/* Raw Data */}
            <Divider>
              <Chip label="Raw Data" size="small" />
            </Divider>

            <Box
              sx={{
                fontSize: 12,
                fontFamily: 'monospace',
                backgroundColor: '#fafafa',
                borderRadius: 2,
                padding: 2,
              }}
            >
              <pre>{configText}</pre>
            </Box>
          </Stack>
        ) : (
          <Typography variant="body2" color="text.primary">
            Select a node to view details.
          </Typography>
        )}
      </Stack>
    </Drawer>
  );
};

export default RightSidebar;
