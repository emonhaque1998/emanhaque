// store/counterSlice.ts
import { PostInput } from "@/lib/postSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "@/types/allTypes";

interface PostState {
  data?: PostType | null;
}

const initialState: PostState = {
  data: null,
};

export const singlePostSlice = createSlice({
  name: "singlePostSlice",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.data = action.payload;
    },
  },
});

export const { addPost } = singlePostSlice.actions;
export default singlePostSlice.reducer;
