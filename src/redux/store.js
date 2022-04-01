import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { mailsReducer, userMailsReducer } from "./reducers/mailsReducer";
import { searchMailsReducer } from "./reducers/searchReducers";

const initialState = {
  searchMails: {
    mails: window.localStorage.getItem("searchItems")
      ? JSON.parse(window.localStorage.getItem("searchItems"))
      : [],
  },
};

const reducer = combineReducers({
  mails: mailsReducer,
  userMails: userMailsReducer,
  searchMails: searchMailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
