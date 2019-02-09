import React from 'react';
import { TextField } from '@material-ui/core';


export default ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <TextField
    error={Boolean(touched && error)}
    helperText={Boolean(touched && error) && error}
    margin="normal"
    fullWidth
    label={label}
    {...custom}
    {...input}
  >
    {children}
  </TextField>
);
