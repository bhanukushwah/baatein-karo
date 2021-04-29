import React, { useEffect } from "react";
import queryString from "query-string";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./Chat.css";
import {
  addMessage,
  addUsers,
  setCurrentUser,
  setRoom,
  updateMessageStatus,
} from "../../redux/slice";
import { socket } from "../../utils/socket";

const Chat = ({ location }) => {
  const dispatch = useDispatch();

  const room = useSelector((state) => state.room);
  const users = useSelector((state) => state.users);

  // create a connection on mount
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    dispatch(setRoom({ room: room }));
    dispatch(setCurrentUser({ user: name }));

    // join the room
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search, dispatch]);

  useEffect(() => {
    socket.on("message", (message) => {
      dispatch(addMessage({ message: message }));
    });
    socket.on("delivered", (messageId) => {
      dispatch(updateMessageStatus({ messageId, status: "delivered" }));
    });

    socket.on("seen", (messageId) => {
      dispatch(updateMessageStatus({ messageId, status: "seen" }));
    });
  }, [dispatch]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      dispatch(addUsers({ users }));
    });
  }, [users, dispatch]);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages />
        <Input />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
