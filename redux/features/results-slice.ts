import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  page: number;
  results: {
    id: string;
    title: string;
    poster_path: string;
    vote_average: string;
  }[];
};
export const results = createSlice({
  name: "results",
  initialState: {} as InitialState,
  reducers: {
    update: (state, action: PayloadAction<InitialState>) => {
      return action.payload;
    },
  },
});

export const { update } = results.actions;
export default results.reducer;
