import {
  SEARCH_MAILS_FAIL,
  SEARCH_MAILS_REQUEST,
  SEARCH_MAILS_SUCCESS,
} from "../constants";

export const searchMails = (keyword) => async (dispatch, getState) => {
  dispatch({ type: SEARCH_MAILS_REQUEST });
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
    );
    let data = await res.json();
    data = data.filter((mail) => {
      return (
        mail.subject.includes(keyword.toLowerCase()) ||
        mail.body.includes(keyword.toLowerCase())
      );
    });
    dispatch({ type: SEARCH_MAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_MAILS_FAIL, payload: error.message });
  }
};
