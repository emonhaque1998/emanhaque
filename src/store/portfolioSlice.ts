// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "@/types/allTypes";

interface PostState {
  data?: PortfolioType[] | null;
}

const initialState: PostState = {
  data: null,
};

export const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,
  reducers: {
    addPortfolio: (state, action: PayloadAction<PortfolioType>) => {
      state.data?.push(action.payload);
    },
    addAllPortfolio: (state, action: PayloadAction<PortfolioType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPortfolio, addAllPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
