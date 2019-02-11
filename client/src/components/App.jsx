import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import store from '../store';
import theme from '../theme';
import renderRoutes from '../routers';

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {renderRoutes()}
    </MuiThemeProvider>
  </Provider>
);
