import { SET_RUSSIAN_LANG } from '../actions/setRussianLang';
import english from '../languages/english';
import russian from '../languages/russian';


const initialState = {
  lang: english,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RUSSIAN_LANG:
      return {
        ...state,
        lang: russian,
      };
    default:
      return state;
  }
};
