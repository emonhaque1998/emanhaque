// store/counterSlice.ts
import { UserType } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user?: UserType | null;
  allUser?: UserType[] | null;
}

const initialState: UserState = {
  user: null,
  allUser: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },

    updateAllUser: (state, action: PayloadAction<UserType[]>) => {
      state.allUser = action.payload;
    },
  },
});

export const { addUser, updateAllUser } = userSlice.actions;
export default userSlice.reducer;
