import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface IFormInput {
  firstSeqValue: string;
  secondSeqValue: string;
}

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<IFormInput>({
    defaultValues: {
      firstSeqValue: '',
      secondSeqValue: '',
    },
    mode: 'onChange',
  });

  const firstSeqFieldValue = watch('firstSeqValue');

  const onSubmit = (data: IFormInput) => {
    console.log('Form data:', data);
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

  return (
    <Container sx={{ my: '10vh' }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              {...register('firstSeqValue', {
                required: 'This field is required',
                validate: (value) => validatePattern(value) || true,
                // validate: (value) => {
                //   validatePattern(value);
                //   const patternError = validatePattern(value);
                //   if (patternError !== true) return patternError;
                //   return validateSameLength(value, secondSeqFieldValue) || true;
                // },
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
    </Container>
  );
}

export default Form;
