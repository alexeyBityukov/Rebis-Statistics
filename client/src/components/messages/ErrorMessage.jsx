import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core';

const style = ({ palette, spacing }) => createStyles({
  error: {
    background: palette.error[50],
    padding: spacing.unit,
    border: `1px solid ${palette.error.main}`,
  },
});

export default withStyles(style)(({ classes, label }) => (
  <Fragment>
    {label && (
      <Typography
        align="left"
        className={classes.error}
        color="error"
        variant="subtitle1"
      >
        {`*${label}`}
      </Typography>
    )}
  </Fragment>
));
