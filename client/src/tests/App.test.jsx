import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

describe('<App>', () => {
  it('should renders without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    ReactDOM.unmountComponentAtNode(root);
  });
});
