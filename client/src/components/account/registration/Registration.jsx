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
  const { classes, lang: { registration } } = props;
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off">
        <TextField
          margin="normal"
          fullWidth
          required
          label={registration.loginFieldLabel}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          type="password"
          label={registration.passwordFieldLabel}
        />
        <Button
          color="primary"
        >
          {registration.registerButtonLabel}
        </Button>
      </form>
    </Paper>
  );
}));
