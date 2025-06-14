import React from 'react';

import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import type { IFormInput } from '../types';

function Form({
  setSubmittedData,
}: {
  setSubmittedData: React.Dispatch<React.SetStateAction<IFormInput | null>>;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<IFormInput>({
    defaultValues: {
      firstSeqValue: '',
      secondSeqValue: '',
    },
    mode: 'onChange',
  });

  const firstSeqFieldValue = watch('firstSeqValue');
  const secondSeqFieldValue = watch('secondSeqValue');

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

  const handleInputChange = (value: string, fieldName: keyof IFormInput) => {
    const uppercaseValue = value.toUpperCase();
    setValue(fieldName, uppercaseValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const canVisualise =
    firstSeqFieldValue.length === secondSeqFieldValue.length &&
    firstSeqFieldValue.length !== 0;

  return (
    <Container sx={{ my: '5vh' }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              {...register('firstSeqValue', {
                required: 'This field is required',
                validate: (value) => validatePattern(value) || true,
                onChange: (e) =>
                  handleInputChange(e.target.value, 'firstSeqValue'),
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
                onChange: (e) =>
                  handleInputChange(e.target.value, 'secondSeqValue'),
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
              disabled={!canVisualise}
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
