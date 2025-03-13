import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      const newUser = action.payload;
      if (newUser) {
        state.user = newUser;
        state.isLoggedIn = true;
      } else {
        state.user = null;
        state.isLoggedIn = false;
      }
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
