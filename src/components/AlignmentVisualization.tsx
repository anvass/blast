import {
  Alert,
  Box,
  Container,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { Acid, IFormInput } from '../types';
import { useState } from 'react';
import { AminoAcidColors } from '../data';

function splitSeqIntoChunks(seq: string, size: number) {
  const result = [];
  for (let i = 0; i < seq.length; i += size) {
    result.push(seq.slice(i, i + size));
  }
  return result;
}

function AlignmentVisualization({
  submittedData,
}: {
  submittedData: IFormInput | null;
}) {
  const theme = useTheme();
  const isMoreThanSmScreenSize = useMediaQuery(theme.breakpoints.up('sm'));
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);

  if (!submittedData?.firstSeqValue || !submittedData?.secondSeqValue) {
    return (
      <Container>
        <Box component="div">
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid
              sx={{ p: 2, border: '1px dashed grey' }}
              size={{ xs: 12, md: 8 }}
            >
              <Typography
                variant="overline"
                component="p"
                sx={{
                  fontSize: '1.1em',
                  lineHeight: 'inherit',
                  textAlign: 'center',
                }}
              >
                No data
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  const groupSize = isMoreThanSmScreenSize ? 30 : 12;

  const firstSeqChunks = splitSeqIntoChunks(
    submittedData.firstSeqValue,
    groupSize
  );
  const secondSeqChunks = splitSeqIntoChunks(
    submittedData.secondSeqValue,
    groupSize
  );
  const maxGroupsCount = Math.max(
    firstSeqChunks.length,
    secondSeqChunks.length
  );
  const groupsOfChunksOfBothSequences = [];

  for (let i = 0; i < maxGroupsCount; i++) {
    groupsOfChunksOfBothSequences.push({
      firstSeq: firstSeqChunks[i],
      secondSeq: secondSeqChunks[i],
    });
  }

  const SELECTION_TIME = 1_000;

  const handleSelect = async () => {
    const selection = window.getSelection();

    if (!selection?.toString()) return;

    try {
      await navigator.clipboard.writeText(selection.toString());
      setIsOpenSnackbar(true);

      setTimeout(() => {
        setIsOpenSnackbar(false);
      }, SELECTION_TIME);
    } catch (err) {
      console.error('Error while copying:', err);
    }
  };

  return (
    <Container>
      <Box component="div">
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid
            sx={{ p: 2, border: '1px dashed grey' }}
            size={{ xs: 12, md: 8 }}
          >
            <Grid
              sx={{
                fontSize: '1.1em',
                lineHeight: 'inherit',
                textAlign: 'center',
                '::selection': { backgroundColor: '#FF0000', color: '#FFFFFF' },
              }}
              onMouseUp={handleSelect}
            >
              {groupsOfChunksOfBothSequences.map((group, groupIndex) => (
                <Box
                  component={'div'}
                  key={`group-${groupIndex}`}
                  sx={{ mb: '1vh' }}
                >
                  <Typography
                    variant="overline"
                    component="p"
                    sx={{
                      fontSize: '1.1em',
                      lineHeight: 'inherit',
                      textAlign: 'center',
                    }}
                  >
                    {group.firstSeq.split('').map((char, charIndex) => (
                      <span
                        key={`seq1-${groupIndex}-${charIndex}`}
                        style={{
                          backgroundColor: AminoAcidColors[char as Acid],
                          fontSize: 'inherit',
                          letterSpacing: 'inherit',
                          lineHeight: 'inherit',
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </Typography>
                  <Typography
                    variant="overline"
                    component="p"
                    sx={{
                      fontSize: '1.1em',
                      lineHeight: 'inherit',
                      textAlign: 'center',
                    }}
                  >
                    {group.secondSeq.split('').map((char, charIndex) => (
                      <Typography
                        component="span"
                        key={`seq2-${groupIndex}-${charIndex}`}
                        sx={{
                          backgroundColor:
                            group.firstSeq[charIndex] === char
                              ? 'transparent'
                              : AminoAcidColors[char as Acid],
                          fontSize: 'inherit',
                          letterSpacing: 'inherit',
                          lineHeight: 'inherit',
                        }}
                      >
                        {char}
                      </Typography>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Snackbar
              open={isOpenSnackbar}
              autoHideDuration={SELECTION_TIME}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert severity="success">Text copied to clipboard!</Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AlignmentVisualization;
