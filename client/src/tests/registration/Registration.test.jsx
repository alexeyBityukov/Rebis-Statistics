import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Registration, validate } from '../../components/account/registration/Registration';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

let component;
let store;
const registrationFormLabel = {
  emailFieldLabel: 'email',
  passwordFieldLabel: 'pass',
  repeatPasswordFieldLabel: 'repeat pass',
};

beforeEach(() => {
  store = mockStore({});
  component = shallow((<Registration
    store={store}
    lang={registrationFormLabel}
    handleSubmit={() => true}
    errorMessage=""
  />));
});

describe('<Registration>', () => {
  it('should shallow render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should shallow render with error message  correctly', () => {
    const message = 'message';

    component = shallow((<Registration
      store={store}
      lang={registrationFormLabel}
      handleSubmit={() => true}
      errorMessage={message}
    />));

    expect(shallowToJson(component)).toMatchSnapshot();
    expect(component.props().errorMessage).toEqual(message);
  });

  it('should validate correct', () => {
    const correctFieldsName = { field: 'field', email: 'email' };
    const correctFieldsValue = { field: 'value', email: 'test@ya.ru' };
    const emptyFieldsValue = { field: '', email: '' };
    const errorRequiredFields = { field: 'requiredField', email: 'requiredField' };
    const invalidEmailValue = { field: 'value', email: 'test' };
    const errorInvalidEmail = { email: 'invalidEmail' };

    expect(validate(correctFieldsName)(correctFieldsValue)).toEqual({});
    expect(validate(correctFieldsName)(emptyFieldsValue)).toEqual(errorRequiredFields);
    expect(validate(correctFieldsName)(invalidEmailValue)).toEqual(errorInvalidEmail);
  });
});
