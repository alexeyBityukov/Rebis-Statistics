import { UPSERT_REGISTRATION_FIELD } from '../actions/upsertRegistrationField';
import english from '../languages/english';
// import russian from '../languages/russian';


export const initialState = {
  lang: english,
  registration: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_REGISTRATION_FIELD: {
      const newState = { ...state };
      newState.registration[action.fieldName] = action.fieldValue;
      return newState;
    }
    default:
      return state;
  }
};
