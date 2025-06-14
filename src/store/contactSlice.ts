// store/counterSlice.ts
import { ContactType } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  data?: ContactType[] | null;
  singleContact: ContactType | null;
}

const initialState: CategoryState = {
  data: [],
  singleContact: null,
};

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.data?.push(action.payload);
    },
    addSingleContact: (state, action: PayloadAction<ContactType>) => {
      state.singleContact = action.payload;
    },
    addAllContact: (state, action: PayloadAction<ContactType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addContact, addSingleContact, addAllContact } =
  contactSlice.actions;
export default contactSlice.reducer;
