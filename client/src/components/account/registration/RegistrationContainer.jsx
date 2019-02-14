import React, { Component } from 'react';
import Registration from './Registration';
import config from '../../../config';
import { connect } from 'react-redux';
import upsertRegistrationStatus from '../../../actions/upsertRegistrationStatus';

export class RegistrationContainer extends Component {
    state = {
      errorMessage: '',
    };

    handleSubmit = (value) => {
      const { dispatch } = this.props.store;
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
          dispatch(upsertRegistrationStatus(true));
        else
          throw new Error(this.props.apiCreateUser);
      })
        .catch((error) => {
          dispatch(upsertRegistrationStatus(false));
          this.setState({errorMessage: error.message});
        });
    };

    render() {
      const { errorMessage } = this.state;

      return <Registration
        onSubmit={this.handleSubmit}
        errorMessage={errorMessage}
      />;
    }
  };


export default connect(
  state => ({ apiCreateUser: state.main.lang.errors.apiCreateUser }),
)(RegistrationContainer);
