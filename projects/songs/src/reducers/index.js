import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: "Bueno es Adorarte", duration: "3:30" },
    { title: "In Christ Alone", duration: "4:30" },
    { title: "God's not dead", duration: "3:15" },
    { title: "Amazing Grace", duration: "2:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export const reducers =  combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
