import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Registration from './Registration';
import { connect } from 'react-redux';

export default connect((state => ({registration: state.form.registration})))(reduxForm(
  {
    form: 'registration'
  }
)(class extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('send req on save');
    console.log(this.props.registration.values);
  };

  render() {
    return <Registration
      handleSubmit={this.handleSubmit}
    />;
  }
}));
