import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import BiotechTwoToneIcon from '@mui/icons-material/BiotechTwoTone';

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BiotechTwoToneIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BLAST
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
