import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ErrorMessage from '../../messages/ErrorMessage';
import TextField from '../../textFields';


const listFields = {
  login: 'login',
  password: 'password',
  repeatPassword: 'repeatPassword',
};

const styles = ({ spacing }) => createStyles({
  paper: {
    margin: spacing.unit,
    padding: spacing.unit,
  },
});

const validate = (values) => {
  const errors = {};
  if (
    values.login && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)
  ) {
    errors.login = 'Invalid email address';
  }
  return errors;
};

export default connect(
  state => ({ lang: state.main.lang }),
)(withStyles(styles)(reduxForm(
  {
    form: 'registration',
    validate,
  },
)((props) => {
  const {
    classes,
    lang: { registration },
    handleSubmit,
    errorMessage,
  } = props;
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field
          name={listFields.login}
          required
          label={registration.loginFieldLabel}
          component={TextField}
        />
        <Field
          name={listFields.password}
          required
          label={registration.passwordFieldLabel}
          component={TextField}
        />
        <Field
          name={listFields.repeatPassword}
          required
          label={registration.repeatPasswordFieldLabel}
          component={TextField}
        />
        <ErrorMessage label={errorMessage} />
        <Button
          color="primary"
          type="submit"
        >
          {registration.registerButtonLabel}
        </Button>
      </form>
    </Paper>
  );
})));
