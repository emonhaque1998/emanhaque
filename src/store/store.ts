// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerReducer from "./bannerSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    bannerSlice: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
