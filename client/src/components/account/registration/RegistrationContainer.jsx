import React, { Component } from 'react';
import Registration from './Registration';

export default
  class extends Component {
    state = {
      errorMessage: ''
    };

    handleSubmit = (value) => {
      console.log('send req on save');
      console.log(value);
      this.setState({errorMessage: 'asd'});
    };

    render() {
      return <Registration
        onSubmit={this.handleSubmit}
        errorMessage={this.state.errorMessage}
      />;
    }
  };
