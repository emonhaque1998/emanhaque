// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerInput } from "@/lib/bannerSchema";

const initialState: BannerInput = {
  title: "",
  slogan: "",
  url: "",
};

export const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    addBanner: (state, action: PayloadAction<BannerInput>) => {
      state.title = action.payload.title;
      state.slogan = action.payload.slogan;
      state.url = action.payload.url;
    },
  },
});

export const { addBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
