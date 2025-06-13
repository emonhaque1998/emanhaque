// store/counterSlice.ts
import { CategoryType, CategoryTypeAndPortFolio } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  data?: CategoryType[] | null;
  singleCategory: CategoryTypeAndPortFolio | null;
}

const initialState: CategoryState = {
  data: [],
  singleCategory: null,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryType>) => {
      state.data?.push(action.payload);
    },
    addSingleCategory: (
      state,
      action: PayloadAction<CategoryTypeAndPortFolio>
    ) => {
      state.singleCategory = action.payload;
    },
    addAllCategory: (state, action: PayloadAction<CategoryType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addAllCategory, addCategory, addSingleCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
