// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerReducer from "./bannerSlice";
import postReducer from "./postSlice";
import categoryReducer from "./categorySlice";
import singlePostReducer from "./singlePost";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    bannerSlice: bannerReducer,
    postSlice: postReducer,
    categorySlice: categoryReducer,
    singlePostSlice: singlePostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
