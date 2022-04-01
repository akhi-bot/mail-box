import {
  MAILS_FAIL,
  MAILS_REQUEST,
  MAILS_SUCCESS,
  USER_MAILS_FAIL,
  USER_MAILS_REQUEST,
  USER_MAILS_SUCCESS,
} from "../constants";

export const mailsReducer = (state = { loading: true, mails: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case MAILS_REQUEST:
      return { loading: true };
    case MAILS_SUCCESS:
      return { loading: false, mails: action.payload };
    case MAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userMailsReducer = (state = { loading: true }, action) => {
  console.log(action.type);
  switch (action.type) {
    case USER_MAILS_REQUEST:
      return { loading: true };
    case USER_MAILS_SUCCESS:
      return { loading: false, mails: action.payload };
    case USER_MAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
