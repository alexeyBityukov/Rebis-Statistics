import React, { Component } from 'react';
import Registration from './Registration';

export default class extends Component {
  state = {
    fields: {
    }
  };

  handleOnChange = (fieldName) => {
    return (event) => {
      event.preventDefault();
      this.setState({
        fields: {
          ...this.state.fields,
          [fieldName]: event.target.value,
        }
      });
    }
  };

  handleOnClick = (event) => {
    event.preventDefault();
    console.log('send req on save');
    console.log(this.state);
  };

  render() {
    return <Registration
      handleOnChange={this.handleOnChange}
      handleOnClick={this.handleOnClick}
      fields={this.state.fields}
    />;
  }
};
