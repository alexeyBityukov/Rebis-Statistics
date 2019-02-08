import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


const styles = ({ spacing }) => createStyles({
  paper: {
    margin: spacing.unit,
    padding: spacing.unit,
  },
});

export default connect(
  state => ({ lang: state.lang }),
)(withStyles(styles)((props) => {
  const {
    classes,
    handleOnChange,
    handleOnClick,
    lang: { registration },
    fields,
  } = props;
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off">
        <TextField
          margin="normal"
          fullWidth
          required
          label={registration.loginFieldLabel}
          onChange={handleOnChange('loginField')}
          value={fields.loginField || ''}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          type="password"
          label={registration.passwordFieldLabel}
          onChange={handleOnChange('passwordField')}
          value={fields.passwordField || ''}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          type="password"
          label={registration.repeatPasswordFieldLabel}
          onChange={handleOnChange('repeatPasswordField')}
          value={fields.repeatPasswordField || ''}
        />
        <Button
          color="primary"
          onClick={handleOnClick}
        >
          {registration.registerButtonLabel}
        </Button>
      </form>
    </Paper>
  );
}));
