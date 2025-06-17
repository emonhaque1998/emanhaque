// store/counterSlice.ts
import { ServiceType } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  data?: ServiceType[] | null;
  singleService: ServiceType | null;
}

const initialState: ServiceState = {
  data: [],
  singleService: null,
};

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<ServiceType>) => {
      state.data?.push(action.payload);
    },
    addSingleService: (state, action: PayloadAction<ServiceType>) => {
      state.singleService = action.payload;
    },
    addAllService: (state, action: PayloadAction<ServiceType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addService, addSingleService, addAllService } =
  serviceSlice.actions;
export default serviceSlice.reducer;
