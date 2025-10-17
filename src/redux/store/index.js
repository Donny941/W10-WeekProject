import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducers from "../reducers/songReducers";
import favReducers from "../reducers/favReducers";
import playerSongReducers from "../reducers/playerSongReducers";

const rootReducer = combineReducers({
  search: songReducers,
  favourite: favReducers,
  playsong: playerSongReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
