import React from "react";
import { useSelector } from "react-redux";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
};

export default Messages;
