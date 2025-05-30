// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerReducer from "./bannerSlice";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    bannerSlice: bannerReducer,
    postSlice: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
