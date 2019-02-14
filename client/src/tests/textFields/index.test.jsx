import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { RenderTextField } from '../../components/textFields';


configure({ adapter: new Adapter() });

const compareProps = (component, props) => {
  Object.keys(props).forEach((key) => {
    expect(component.prop(key)).toEqual(props[key]);
  });
};

describe('<RenderTextField>', () => {
  it('should render correctly', () => {
    const label = 'labelText';
    const component = shallow(<RenderTextField label={label} />);

    expect(shallowToJson(component)).toMatchSnapshot();
    compareProps(component, {
      label,
      error: false,
      fullWidth: true,
      helperText: false,
      margin: 'normal',
      required: false,
    });
  });

  it('should render with helperText', () => {
    const label = 'labelText';
    const helperText = 'error message';
    const errors = { errorKey: helperText };
    const component = shallow((
      <RenderTextField
        meta={{ touched: true, error: 'errorKey' }}
        errors={errors}
        required
        label={label}
      />));

    compareProps(component, {
      label,
      error: true,
      fullWidth: true,
      helperText,
      margin: 'normal',
      required: true,
    });

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
