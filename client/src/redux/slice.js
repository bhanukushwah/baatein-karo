import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    user: "",
    room: "",
    users: [],
    messages: [],
  },
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.user = payload.user;
    },
    setRoom: (state, { payload }) => {
      state.room = payload.room;
    },
    addUsers: (state, { payload }) => {
      state.users = [...payload.users];
    },
    addMessage: (state, { payload }) => {
      state.messages.push(payload.message);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUsers,
  addMessage,
  setCurrentUser,
  setRoom,
} = stateSlice.actions;

export default stateSlice.reducer;
