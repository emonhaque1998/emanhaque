// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerInput } from "@/lib/bannerSchema";

interface BannerState {
  data?: BannerInput | null;
}

const initialState: BannerState = {
  data: null,
};

export const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    addBanner: (state, action: PayloadAction<BannerInput>) => {
      state.data = action.payload;
    },
  },
});

export const { addBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
