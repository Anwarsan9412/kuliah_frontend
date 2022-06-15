import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/**
 * Buat slice: untuk generete action dan reducer.
 * menerima param object: name, initialState, reducers
 */
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // add movie to movies
      state.movies.push(action.payload);
    },
    deleteMovie() {},
  },
});

// generete action dan reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie };