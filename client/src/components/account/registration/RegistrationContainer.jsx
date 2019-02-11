import React, { Component } from 'react';
import Registration from './Registration';
import config from '../../../config';
import { connect } from 'react-redux';

export default connect(
  state => ({ apiCreateUser: state.main.lang.errors.apiCreateUser }),
)(class extends Component {
    state = {
      errorMessage: '',
    };

    handleSubmit = (value) => {
      fetch(`${config.apiUrl}register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.email,
          password: value.password,
          hash: '123someHash'
        })
      }).then((response) => {
        if(response.status === 200)
          console.log('user created, go to next action');
        else
          throw new Error(this.props.apiCreateUser);
      })
        .catch((error) => {this.setState({errorMessage: error.message})});
    };

    render() {
      const { errorMessage } = this.state;

      return <Registration
        onSubmit={this.handleSubmit}
        errorMessage={errorMessage}
      />;
    }
  });
