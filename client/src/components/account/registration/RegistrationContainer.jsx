import React, { Component } from 'react';
import Registration from './Registration';
import config from '../../../config';

export default
  class extends Component {
    state = {
      errorMessage: ''
    };

    handleSubmit = (value) => {
      //post('register', body, );
      fetch(`${config.apiUrl}register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.email,
          password: value.password,
          hash: '123someHash'
        })
      }).then((resp) => {console.log('resp')}).catch((err) => {console.log('err')});

      this.setState({errorMessage: 'asd'});
    };

    render() {
      return <Registration
        onSubmit={this.handleSubmit}
        errorMessage={this.state.errorMessage}
      />;
    }
  };
