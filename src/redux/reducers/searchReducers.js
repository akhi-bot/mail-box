import {
  SEARCH_MAILS_FAIL,
  SEARCH_MAILS_REQUEST,
  SEARCH_MAILS_SUCCESS,
} from "../constants";

export const searchMailsReducer = (
  state = { loading: true, mails: [] },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case SEARCH_MAILS_REQUEST:
      return { loading: true };
    case SEARCH_MAILS_SUCCESS:
      return { loading: false, mails: action.payload };
    case SEARCH_MAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
