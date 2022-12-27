import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  id: localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const { user, accessToken, id } = action.payload;
      state.user = user;
      window.localStorage.setItem("user", JSON.stringify(state.user));
      state.token = accessToken;
      window.localStorage.setItem("token", JSON.stringify(state.token));
      state.id = id;
      window.localStorage.setItem("id", JSON.stringify(state.id));

      // setting user and access token to the localStorage
    },
    userUpdate: (state, action) => {
      const { user } = action.payload;

      state.user = user;
      window.localStorage.setItem("user", JSON.stringify(state.user));
    },
    userLogout: (state, action) => {
      state.user = localStorage.removeItem("user");
      state.token = localStorage.removeItem("token");
    },
  },
});

export const { userLogin, userLogout, userUpdate } = userSlice.actions;

export default userSlice.reducer;
