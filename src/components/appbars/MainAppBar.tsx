import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MainAppBar = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}
    >
      <Toolbar>
        <IconButton edge="start">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" color="text.primary">
          Back
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          Personalized Campaign
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
