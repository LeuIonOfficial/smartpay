import { createSlice } from "@reduxjs/toolkit";

// interface data {
//   name: string;
//   iban: string;
//   email: string;
//   bic: string;
//   idno: string;
// }

const initialState = {
  user: {
    name: "",
    iban: "",
    email: "",
    bic: "",
    idno: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: any, action) => {
      console.log(action.payload.user);
      state.user = { ...action.payload.user };
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
