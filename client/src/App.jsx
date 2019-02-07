import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import changeTest from './actions/changeTest';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <button
        className="App-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.changeTest}
      >
        {props.reduxTest}
      </button>
    </header>
  </div>
);

export default connect(
  state => ({ reduxTest: state.reduxTest }),
  dispatch => ({ changeTest: () => dispatch(changeTest()) }),
)(App);
