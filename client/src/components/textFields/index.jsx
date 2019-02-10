import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';


const renderTextField = ({
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

renderTextField.propTypes = {
  meta: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  input: PropTypes.shape({}),
  label: PropTypes.string,
};

renderTextField.defaultProps = {
  meta: {},
  children: null,
  input: {},
  label: '',
};

export default renderTextField;
