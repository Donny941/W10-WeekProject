import { SAVE_SONG, SEARCH_QUERY, SET_LOADING, SET_ERROR } from "../action";

const songState = {
  songs: {
    rock: [],
    pop: [],
    hiphop: [],
    query: [],
  },
  query: "",
  isLoading: false,
  hasError: false,
  errorMex: "",
};

const songReducers = (state = songState, action) => {
  switch (action.type) {
    case SAVE_SONG:
      return {
        ...state,

        songs: {
          ...state.songs,
          [action.payload.category]: action.payload.data,
        },
      };

    case SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default songReducers;
