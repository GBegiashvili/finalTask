import { combineReducers } from "redux";

import auth from "./auth/reducer";
import posts from "./posts/reducer";

const reducers = {
  auth,
  posts,
};

const reducer = combineReducers(reducers);

export default reducer;
