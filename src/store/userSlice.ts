// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  name?: string | null;
  role?: string | null;
  clerkId: string;
  image?: string;
  createdAt: Date;
}

interface UserState {
  user?: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User | null | undefined>) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
