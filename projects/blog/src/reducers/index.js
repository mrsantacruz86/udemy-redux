import postsReducer from "./postsReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  posts: postsReducer
});
