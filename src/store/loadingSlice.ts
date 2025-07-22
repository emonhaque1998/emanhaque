// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  data: Boolean;
}

const initialState: LoadingState = {
  data: true,
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Boolean>) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
