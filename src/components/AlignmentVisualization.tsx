import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { IFormInput } from '../types';

interface IColorTable {
  [key: string]: string;
}

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
  const isMoreThanMdScreenSize = useMediaQuery(theme.breakpoints.up('md'));

  if (!submittedData?.firstSeqValue || !submittedData?.secondSeqValue) {
    return;
  }

  const compareSeqValues = (char1: string, char2: string): string => {
    return char1 === char2 ? 'transparent' : colorTable[char2];
  };

  const groupSize = isMoreThanMdScreenSize ? 30 : 12;

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

  return (
    <Box component="div" sx={{ m: '0 5vw', p: 2, border: '1px dashed grey' }}>
      <Grid
        spacing={2}
        sx={{
          display: 'block',
          wordWrap: 'break-word',
          fontSize: '1.1em',
          lineHeight: 'inherit',
          textAlign: 'center',
        }}
      >
        {groupsOfChunksOfBothSequences.map((group, groupIndex) => (
          <Box
            component={'div'}
            key={`group-${groupIndex}`}
            data-test={`group-${groupIndex}`}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{
                fontSize: '1.1em',
                lineHeight: 'inherit',
                display: 'grid',
                gridTemplateColumns: `repeat(${groupSize}, 1fr)`,
                textAlign: 'center',
              }}
            >
              {group.firstSeq.split('').map((char, charIndex) => (
                <Typography
                  component="span"
                  key={`seq1-${groupIndex}-${charIndex}`}
                  sx={{
                    backgroundColor: colorTable[char],
                    fontSize: 'inherit',
                    letterSpacing: 'inherit',
                    lineHeight: 'inherit',
                  }}
                >
                  {char}
                </Typography>
              ))}
            </Typography>
            <Typography
              variant="overline"
              component="p"
              sx={{
                fontSize: '1.1em',
                lineHeight: 'inherit',
                display: 'grid',
                gridTemplateColumns: `repeat(${groupSize}, 1fr)`,
                textAlign: 'center',
              }}
            >
              {group.secondSeq.split('').map((char, charIndex) => (
                <Typography
                  component="span"
                  key={`seq2-${groupIndex}-${charIndex}`}
                  sx={{
                    backgroundColor: compareSeqValues(
                      group.firstSeq[charIndex],
                      char
                    ),
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
    </Box>
  );
}

export default AlignmentVisualization;
