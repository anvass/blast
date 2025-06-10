import { Button, Container, Grid, TextField } from '@mui/material';

function Form() {
  return (
    <Container sx={{ my: '10vh' }}>
      <form
      //   {...form.handleSubmit(onSubmit)}
      >
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              // {...form.register('field1', {
              //   required: 'Это поле обязательное',
              //   validate: (value) => validateLatinLetters(value) || true,
              // })}
              label="First amino sequence"
              variant="outlined"
              fullWidth
              // error={!!form.formState.errors.field1}
              // helperText={form.formState.errors.field1?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              // {...form.register('field2', {
              //   required: 'Это поле обязательное',
              //   validate: (value) => {
              //     const latinError = validateLatinLetters(value);
              //     if (latinError !== true) return latinError;
              //     return validateSameLength(value) || true;
              //   },
              // })}
              label="Second amino sequence"
              variant="outlined"
              fullWidth
              // error={!!form.formState.errors.field2}
              // helperText={form.formState.errors.field2?.message}
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
      </form>
    </Container>
  );
}

export default Form;
