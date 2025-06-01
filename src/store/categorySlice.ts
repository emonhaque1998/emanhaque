// store/counterSlice.ts
import { CategoryType } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/allTypes";

interface CategoryState {
  data?: CategoryType[] | null;
}

const initialState: CategoryState = {
  data: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryType>) => {
      state.data?.push(action.payload);
    },
    addAllCategory: (state, action: PayloadAction<CategoryType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addAllCategory, addCategory } = categorySlice.actions;
export default categorySlice.reducer;
