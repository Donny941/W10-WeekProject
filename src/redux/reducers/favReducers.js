import { ADD_TO_FAV, REMOVE_FAV } from "../action";

const jobState = {
  content: [],
};

const favReducers = (state = jobState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        content: state.content.filter((job) => {
          return job.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};

export default favReducers;
