import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  id: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignName: (prevState, action) => {
      return {
        ...prevState,
        name: action.payload,
      };
    },
    assignEmail: (prevState, action) => {
      return {
        ...prevState,
        email: action.payload,
      };
    },
    assignId: (prevState, action) => {
      return {
        ...prevState,
        id: action.payload,
      };
    },
    dissmisData: (prevState) => {
      return {
        ...prevState,
        name: "",
        email: "",
        id: "",
      };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
