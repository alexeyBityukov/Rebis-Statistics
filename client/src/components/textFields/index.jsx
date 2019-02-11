import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  children,
  test,
}) => (
  <TextField
    error={Boolean(touched && error)}
    helperText={Boolean(touched && error) && test[error]}
    margin="normal"
    fullWidth
    label={label}
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
  test: PropTypes.shape({}),
};

renderTextField.defaultProps = {
  meta: {},
  children: null,
  input: {},
  label: '',
  test: {},
};

export default connect(state => ({ test: state.main.lang.errors }))(renderTextField);
