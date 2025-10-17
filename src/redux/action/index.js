export const SAVE_SONG = "SAVE_SONG";

export const SEARCH_QUERY = "SEARCH_QUERY";

export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const addFavourite = (fav) => ({ type: ADD_TO_FAV, payload: fav });
export const removeFavourite = (fav) => ({ type: REMOVE_FAV, payload: fav });

export const searchQuery = (value) => ({ type: SEARCH_QUERY, payload: value });

export const setLoading = (isLoading) => ({ type: SET_LOADING, payload: isLoading });
export const setError = (message) => ({ type: SET_ERROR, payload: message });

export const setPlayer = (song) => ({ type: ADD_TO_PLAYER, payload: song });

export const getSongAction = (url, query, category) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    console.log("state", getState());
    try {
      let response = await fetch(url + query);
      if (response.ok) {
        let { data } = await response.json();
        console.log(data);
        dispatch({ type: SAVE_SONG, payload: { category, data } });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
