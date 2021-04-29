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
    updateMessageStatus: (state, { payload }) => {
      let index = state.messages.findIndex(
        (message) => message.messageId === payload?.messageId
      );
      state.messages[index].status = payload?.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUsers,
  addMessage,
  setCurrentUser,
  setRoom,
  updateMessageStatus,
} = stateSlice.actions;

export default stateSlice.reducer;
