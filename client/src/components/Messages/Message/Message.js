import React, { useEffect } from "react";
import ReactEmoji from "react-emoji";
import { useSelector } from "react-redux";

import { socket } from "../../../utils/socket";
import "./Message.css";

const Message = ({ message: { text, user, status, messageId } }) => {
  const name = useSelector((state) => state.user)
    .trim()
    .toLowerCase();

  // emit when the app is in background
  useEffect(() => {
    if (user !== name && messageId) {
      socket.emit("delivered", messageId);
    }
  }, [name, user, messageId]);

  // check if user is already in focus and emit the status
  useEffect(() => {
    if (user !== name) {
      if (status === "send" || status === "delivered") {
        window.addEventListener("focus", () => {
          socket.emit("seen", messageId);
        });
      }
    }
    return () => {
      window.addEventListener("focus", () => {});
    };
  }, [status, messageId, user, name]);

  return user === name ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div
        className="messageBox backgroundBlue"
        style={{ display: "flex", alignItems: "flex-end" }}
      >
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        {status === "send" ? (
          <div style={{ marginLeft: "1rem" }}>
            <svg
              width="1rem"
              height="1rem"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              fill="LightSteelBlue"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        ) : status === "delivered" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <svg
              width="1rem"
              height="1rem"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              fill="LightSteelBlue"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <svg
              width="1rem"
              height="1rem"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              fill="LightSteelBlue"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <svg
              width="1rem"
              height="1rem"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              fill="white"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <svg
              width="1rem"
              height="1rem"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              fill="white"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
