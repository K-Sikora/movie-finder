import { configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./features/actors-slice";
import moviesReducer from "./features/movies-slice";
import categoriesReducer from "./features/categories-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    actorsReducer,
    moviesReducer,
    categoriesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
