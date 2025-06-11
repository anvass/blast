import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from './Logo';

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ py: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo maxWidth="50px" margin="0 10px 0 0" />
            <span>BLAST</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
