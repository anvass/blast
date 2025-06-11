import { Box, Container, Grid } from '@mui/material';
import { ColorsAminoAcid, ColorsAminoTitle } from '../data';

function Legend() {
  return (
    <Container>
      <Box component="div">
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid
            sx={{ p: 2, border: '1px dashed grey' }}
            size={{ xs: 12, md: 8 }}
          >
            <Grid sx={{ display: 'flex', flexDirection: 'column' }} gap={1}>
              {Object.entries(ColorsAminoAcid).map(([color, acids]) => (
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  gap={2}
                >
                  <Box
                    component="div"
                    style={{
                      backgroundColor: color,
                      width: '25px',
                      height: '25px',
                    }}
                  ></Box>
                  <Box component="div">
                    {ColorsAminoTitle[color]} —{' '}
                    {acids.map((acid) => (
                      <span style={{ fontWeight: 700 }}>{acid}</span>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Legend;
