import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Field } from 'redux-form';


const styles = ({ spacing }) => createStyles({
  paper: {
    margin: spacing.unit,
    padding: spacing.unit,
  },
});

export default connect(
  state => ({ lang: state.main.lang }),
)(withStyles(styles)((props) => {
  const {
    classes,
    lang: { registration },
    handleSubmit,
  } = props;
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field
          name="login"
          margin="normal"
          fullWidth
          required
          label={registration.loginFieldLabel}
          component={TextField}
        />
        <Field
          name="password"
          margin="normal"
          fullWidth
          required
          label={registration.passwordFieldLabel}
          component={TextField}
        />
        <Field
          name="repeatPassword"
          margin="normal"
          fullWidth
          required
          label={registration.repeatPasswordFieldLabel}
          component={TextField}
        />
        <Button
          color="primary"
          type="submit"
        >
          {registration.registerButtonLabel}
        </Button>
      </form>
    </Paper>
  );
}));
