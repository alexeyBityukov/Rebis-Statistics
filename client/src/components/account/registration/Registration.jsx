import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'redux-form-material-ui';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const styles = ({ spacing, palette }) => createStyles({
  paper: {
    margin: spacing.unit,
    padding: spacing.unit,
  },
  error: {
    background: palette.error[50],
    padding: spacing.unit,
    border: `1px solid ${palette.error.main}`,
  },
});

export default connect(
  state => ({ lang: state.main.lang }),
)(withStyles(styles)(reduxForm(
  {
    form: 'registration',
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
        {errorMessage && (
          <Typography
            align="left"
            className={classes.error}
            color="error"
            variant="subtitle1"
          >
            {`*${errorMessage}`}
          </Typography>
        )}
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
