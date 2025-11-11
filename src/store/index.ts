import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice/slice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
