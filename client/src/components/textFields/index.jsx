import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const RenderTextField = ({
  input,
  label,
  meta: { touched, error },
  children,
  errors,
  required,
}) => (
  <TextField
    error={Boolean(touched && error)}
    helperText={Boolean(touched && error) && errors[error]}
    margin="normal"
    fullWidth
    required={required}
    label={label}
    {...input}
  >
    {children}
  </TextField>
);

RenderTextField.propTypes = {
  meta: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  input: PropTypes.shape({}),
  label: PropTypes.string,
  errors: PropTypes.shape({}),
  required: PropTypes.bool,
};

RenderTextField.defaultProps = {
  meta: {},
  children: null,
  input: {},
  label: '',
  errors: {},
  required: false,
};

export default connect(state => ({ test: state.main.lang.errors }))(RenderTextField);
