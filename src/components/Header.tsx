import { AppBar, Toolbar, Typography } from '@mui/material';

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
            <img
              src={'/logo.svg'}
              alt="BLAST"
              style={{
                width: '100%',
                maxWidth: '50px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <span>BLAST</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
