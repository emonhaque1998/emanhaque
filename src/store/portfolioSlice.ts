// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "@/types/allTypes";

interface PostState {
  data?: PortfolioType[] | null;
  singlePortfolio?: PortfolioType | null;
}

const initialState: PostState = {
  data: [],
  singlePortfolio: null,
};

export const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,
  reducers: {
    addPortfolio: (state, action: PayloadAction<PortfolioType>) => {
      state.data?.push(action.payload);
    },
    addSignlePortfolio: (state, action: PayloadAction<PortfolioType>) => {
      state.singlePortfolio = action.payload;
    },
    addAllPortfolio: (state, action: PayloadAction<PortfolioType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPortfolio, addAllPortfolio, addSignlePortfolio } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
