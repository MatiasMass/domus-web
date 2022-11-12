import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    initSesion: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    closeSesion: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { initSesion } = userSlice.actions;

export default userSlice.reducer;
