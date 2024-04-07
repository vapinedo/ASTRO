import cv from "@redux/cv/cvSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cv: cv.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
