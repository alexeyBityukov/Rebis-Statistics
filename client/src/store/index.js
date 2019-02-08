import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from '../reducers';

export default createStore(
  combineReducers({
    main: reducer,
    form: formReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
