import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  id: string;
  poster_path: string;
  title: string;
};
export const movies = createSlice({
  name: "movies",
  initialState: [] as InitialState[],
  reducers: {
    update: (state, action: PayloadAction<InitialState>) => {
      return [...state, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { update, remove } = movies.actions;
export default movies.reducer;
