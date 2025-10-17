import { ADD_TO_PLAYER } from "../action";

const jobState = {
  content: null,
};

const playerSongReducers = (state = jobState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default playerSongReducers;
