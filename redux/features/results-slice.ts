import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  poster_path: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
};
export const results = createSlice({
  name: "results",
  initialState: [] as InitialState[],
  reducers: {
    update: (state, action: PayloadAction<InitialState[]>) => {
      return action.payload;
    },
  },
});

export const { update } = results.actions;
export default results.reducer;
