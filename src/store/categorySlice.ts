// store/counterSlice.ts
import { CategoryInput } from "@/lib/categorySchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/allTypes";

// interface PostType {
//   title: string;
//   content?: string;
//   createdAt: string;
//   userId: string;
//   user: UserType;
// }

interface CategoryState {
  data?: CategoryInput[] | null;
}

const initialState: CategoryState = {
  data: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryInput>) => {
      state.data?.push(action.payload);
    },
    addAllCategory: (state, action: PayloadAction<CategoryInput[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addAllCategory, addCategory } = categorySlice.actions;
export default categorySlice.reducer;
