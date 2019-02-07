import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../App.css';

const App = () => <Fragment />;

export default connect(
  state => ({ reduxTest: state.reduxTest }),
  // dispatch => ({ changeTest: () => dispatch(changeTest()) }),
)(App);
