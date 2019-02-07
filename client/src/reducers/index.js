import { CHANGE_TEST } from '../actions/changeTest';


const initialState = {
  reduxTest: 'true',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEST:
      return {
        ...state,
        reduxTest: action.reduxTest,
      };
    default:
      return state;
  }
};
