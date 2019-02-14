import { UPSERT_REGISTRATION_STATUS } from '../actions/upsertRegistrationStatus';
import english from '../languages/english';
// import russian from '../languages/russian';


export const initialState = {
  lang: english,
  registration: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_REGISTRATION_STATUS: {
      return {
        ...state,
        main: {
          user: {
            registrated: action.status,
          },
        },
      };
    }
    default:
      return state;
  }
};
