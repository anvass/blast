import { Box } from '@mui/material';

function Logo({
  maxWidth,
  margin = '0',
}: {
  maxWidth: string;
  margin?: string;
}) {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: `${maxWidth}`,
        margin: `${margin}`,
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}/logo.svg`}
        alt="BLAST"
        style={{
          width: '100%',
          height: 'auto',
          flexShrink: '0',
        }}
      />
    </Box>
  );
}

export default Logo;
