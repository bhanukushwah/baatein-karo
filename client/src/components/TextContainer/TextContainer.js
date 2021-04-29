import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";
import Footer from "../Footer/Footer";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>Active Members</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
    <Footer />
  </div>
);

export default TextContainer;
