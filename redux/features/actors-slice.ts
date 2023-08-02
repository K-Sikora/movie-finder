import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const actors = createSlice({
  name: "actors",
  initialState: [] as string[],
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      return [...state, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((item) => item !== idToRemove);
    },
  },
});

export const { update, remove } = actors.actions;
export default actors.reducer;
