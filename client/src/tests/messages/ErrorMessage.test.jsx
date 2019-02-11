import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from '../../components/messages/ErrorMessage';

configure({ adapter: new Adapter() });


describe('<ErrorMessage>', () => {
  it('should render correctly', () => {
    const component = shallow(
      <ErrorMessage label="Some error message" />,
    ).dive();
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should nothing render', () => {
    const component = shallow(
      <ErrorMessage />,
    ).dive();
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
