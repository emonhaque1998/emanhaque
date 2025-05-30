// store/counterSlice.ts
import { PostInput } from "@/lib/postSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/allTypes";

interface PostType {
  title: string;
  content?: string;
  createdAt: string;
  userId: string;
  user: UserType;
}

interface PostState {
  data?: PostType[] | null;
}

const initialState: PostState = {
  data: null,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.data?.push(action.payload);
    },
    addAllPost: (state, action: PayloadAction<PostType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export default postSlice.reducer;
