import {
  MAILS_FAIL,
  MAILS_REQUEST,
  MAILS_SUCCESS,
  USER_MAILS_FAIL,
  USER_MAILS_REQUEST,
  USER_MAILS_SUCCESS,
} from "../constants";

export const fetchMails = (tag) => async (dispatch) => {
  dispatch({ type: MAILS_REQUEST });
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
    );
    let data = await res.json();
    if (tag !== "all") {
      data = data.filter((mail) => mail.tag === tag);
    }
    dispatch({ type: MAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MAILS_FAIL, payload: error.message });
  }
};
export const fetchUserMails = (tag, userId) => async (dispatch) => {
  dispatch({ type: USER_MAILS_REQUEST });
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
    );
    let data = await res.json();

    if (tag !== "all") {
      data = data.filter((mail) => {
        return mail.tag === tag && mail.userId.toString() === userId;
      });
    } else {
      data = data.filter((mail) => mail.userId.toString() === userId);
    }
    dispatch({ type: USER_MAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_MAILS_FAIL, payload: error.message });
  }
};
