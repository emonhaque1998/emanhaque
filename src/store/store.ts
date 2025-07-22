// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerReducer from "./bannerSlice";
import postReducer from "./postSlice";
import categoryReducer from "./categorySlice";
import singlePostReducer from "./singlePost";
import contactReducer from "./contactSlice";
import serviceReducer from "./serviceSlice";
import portFolioReducer from "./portfolioSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    bannerSlice: bannerReducer,
    postSlice: postReducer,
    categorySlice: categoryReducer,
    singlePostSlice: singlePostReducer,
    portfolioSlice: portFolioReducer,
    constactSlice: contactReducer,
    serviceSlice: serviceReducer,
    loadingSlice: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
