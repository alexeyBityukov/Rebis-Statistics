import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { RegistrationContainer } from '../../components/account/registration/RegistrationContainer';
import { UPSERT_REGISTRATION_STATUS } from '../../actions/upsertRegistrationStatus';


configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

let component;
let store;
const apiCreateUserErrorMessage = 'creatingUserError';

beforeEach(() => {
  store = mockStore({});
  component = shallow((<RegistrationContainer
    store={store}
    apiCreateUser={apiCreateUserErrorMessage}
  />));
});


const mockFetch = (status, statusText, response) => {
  window.fetch = jest.fn().mockImplementation(
    () => Promise.resolve(
      new window.Response(
        response,
        {
          status,
          statusText,
          headers: {
            'Content-type': 'application/json',
          },
        },
      ),
    ),
  );
};

describe('<RegistrationContainer>', () => {
  it('should shallow render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  const submitValues = {
    username: 'username',
    password: 'password',
    repeatPassword: 'password',
  };

  it('call fetch to registration new user', async () => {
    mockFetch(200);
    await await component.instance().handleSubmit(submitValues);
    expect(store.getActions()).toEqual([{ type: UPSERT_REGISTRATION_STATUS, status: true }]);
  });

  it('should error, on call fetch to registration new user', async () => {
    mockFetch(400);
    await await component.instance().handleSubmit(submitValues);
    expect(store.getActions()).toEqual([{ type: UPSERT_REGISTRATION_STATUS, status: false }]);
    expect(component.state().errorMessage).toEqual(apiCreateUserErrorMessage);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
