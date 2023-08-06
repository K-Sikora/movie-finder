import { Movie } from "@/types/Movie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const movies = createSlice({
  name: "movies",
  initialState: [] as Movie[],
  reducers: {
    update: (state, action: PayloadAction<Movie>) => {
      return [...state, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { update, remove } = movies.actions;
export default movies.reducer;
