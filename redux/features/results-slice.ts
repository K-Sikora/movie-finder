import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  page: number;
  results: {
    id: number;
    title: string;
    backdrop_path: string;
  }[];
};
export const results = createSlice({
  name: "results",
  initialState: {} as InitialState[],
  reducers: {
    update: (state, action: PayloadAction<InitialState[]>) => {
      return action.payload;
    },
  },
});

export const { update } = results.actions;
export default results.reducer;
