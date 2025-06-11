import { AppBar, Box, Typography } from '@mui/material';
import Logo from './Logo';

function Header() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ p: '1vh', boxShadow: 'none' }}
        color="transparent"
      >
        <Box
          component={'div'}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '2.4em',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo maxWidth="100px" margin="0 10px 0 0" />
            <span>BLAST</span>
          </Typography>
        </Box>
      </AppBar>
    </>
  );
}

export default Header;
