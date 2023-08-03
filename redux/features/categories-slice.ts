import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  id: string;
  name: string;
};
export const categories = createSlice({
  name: "categories",
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

export const { update, remove } = categories.actions;
export default categories.reducer;
