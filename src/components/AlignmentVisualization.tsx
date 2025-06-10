import { Box, Grid, Typography } from '@mui/material';
import type { IFormInput } from '../types';

interface IColorTable {
  [key: string]: string;
}

function AlignmentVisualization({
  submittedData,
}: {
  submittedData: IFormInput | null;
}) {
  const colorTable: IColorTable = {
    C: '#FFEA00',
    A: '#67E4A6',
    I: '#67E4A6',
    L: '#67E4A6',
    M: '#67E4A6',
    F: '#67E4A6',
    W: '#67E4A6',
    Y: '#67E4A6',
    V: '#67E4A6',
    P: '#67E4A6',
    G: '#C4C4C4',
    D: '#FC9CAC',
    E: '#FC9CAC',
    K: '#BB99FF',
    R: '#BB99FF',
    S: '#80BFFF',
    T: '#80BFFF',
    H: '#80BFFF',
    Q: '#80BFFF',
    N: '#80BFFF',
  };

  const compareSeqValues = (char1: string, char2: string): string => {
    return char1 === char2 ? '' : '#FF0000';
  };

  return (
    <>
      {submittedData && (
        <Box component="div" sx={{ p: 2, border: '1px dashed grey' }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="overline"
                gutterBottom
                component="p"
                sx={{ fontSize: '1.1em', lineHeight: 'inherit' }}
              >
                {submittedData.firstSeqValue.split('').map((char, index) => (
                  <Typography
                    component="span"
                    key={`str1-${index}`}
                    sx={{
                      backgroundColor: colorTable[char] || '#000000',
                      fontSize: 'inherit',
                      letterSpacing: 'inherit',
                      display: 'inline-block',
                    }}
                  >
                    {char}
                  </Typography>
                ))}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="overline"
                component="p"
                sx={{ fontSize: '1.1em', lineHeight: 'inherit' }}
              >
                {Array.from({
                  length: submittedData.secondSeqValue.length,
                }).map((_, index) => {
                  const char1 = submittedData.firstSeqValue[index] || '';
                  const char2 = submittedData.secondSeqValue[index] || '';

                  return (
                    <Typography
                      component="span"
                      key={`str2-${index}`}
                      sx={{
                        backgroundColor: `${compareSeqValues(char1, char2)}`,
                        fontSize: 'inherit',
                        letterSpacing: 'inherit',
                        display: 'inline-block',
                      }}
                    >
                      {char2}
                    </Typography>
                  );
                })}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default AlignmentVisualization;
