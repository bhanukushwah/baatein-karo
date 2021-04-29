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
} from "../../redux/slice";
import { socket } from "../../utils/socket";

const Chat = ({ location }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state", state);
  const room = useSelector((state) => state.room);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    console.log(name);

    dispatch(setRoom({ room: room }));
    dispatch(setCurrentUser({ user: name }));

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search, dispatch]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      dispatch(addMessage({ message: message }));
    });

    socket.on("roomData", ({ users }) => {
      console.log("users", users);
      dispatch(addUsers({ users }));
    });
  }, [dispatch]);

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
