import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  firstSeqValue: string;
  secondSeqValue: string;
}

interface IColorTable {
  [key: string]: string;
}

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      firstSeqValue: '',
      secondSeqValue: '',
    },
    mode: 'onChange',
  });

  const firstSeqFieldValue = watch('firstSeqValue');

  const [submittedData, setSubmittedData] = useState<IFormInput | null>(null);

  const onSubmit = (data: IFormInput) => {
    console.log('Form data:', data);
    setSubmittedData(data);
    reset();
  };

  const validatePattern = (value: string) => {
    if (!/^[ARNDCEQGHILKMFPSTWY\-V-]+$/.test(value)) {
      return 'The field can only contain Latin letters of amino acids and the dash symbol';
    }
    return true;
  };

  const validateSameLength = (value1: string, value2: string) => {
    return (
      value1.length === value2.length ||
      'Length of the entered sequences in BOTH fields must be the same'
    );
  };

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
    <Container sx={{ my: '10vh' }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              {...register('firstSeqValue', {
                required: 'This field is required',
                validate: (value) => validatePattern(value) || true,
              })}
              id="firstSeqValue"
              label="First amino sequence"
              variant="outlined"
              fullWidth
              error={!!errors.firstSeqValue}
              helperText={errors.firstSeqValue?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              {...register('secondSeqValue', {
                required: 'This field is required',
                validate: (value) => {
                  validatePattern(value);
                  const patternError = validatePattern(value);
                  if (patternError !== true) return patternError;
                  return validateSameLength(value, firstSeqFieldValue) || true;
                },
              })}
              id="secondSeqValue"
              label="Second amino sequence"
              variant="outlined"
              fullWidth
              error={!!errors.secondSeqValue}
              helperText={errors.secondSeqValue?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Button
              type="submit"
              className="w-full"
              variant="contained"
              fullWidth
              size="large"
            >
              Get visualization
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: '5vh' }} />

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
    </Container>
  );
}

export default Form;
