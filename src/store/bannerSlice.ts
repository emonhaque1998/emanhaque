// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerInput } from "@/lib/bannerSchema";

const initialState: BannerInput = {
  title: "",
  slogan: "",
  url: "",
  image: "",
};

export const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    addBanner: (state, action: PayloadAction<BannerInput>) => {
      state.title = action.payload.title;
      state.slogan = action.payload.slogan;
      state.url = action.payload.url;
      state.image = action.payload.image; // Ensure image can be null
    },
    addBannerImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { addBanner, addBannerImage } = bannerSlice.actions;
export default bannerSlice.reducer;
