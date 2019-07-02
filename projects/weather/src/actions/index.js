// Action Creator
// import _ from "lodash";
import axios from "axios";
import { FETCH_WEATHER } from "./types";

const API_KEY = "1d66035e537d8ee597dd8a92f4780ce1";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = city => async dispatch => {
  const url = `${ROOT_URL}&q=${city},us`;
  const response = await axios.get(url);
  dispatch({ type: FETCH_WEATHER, payload: response.data });
};
