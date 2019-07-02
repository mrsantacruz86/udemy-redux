import { combineReducers } from "redux";
import postsReducer from "./weatherReducer";

export const reducers = combineReducers({
  weather: postsReducer
});
