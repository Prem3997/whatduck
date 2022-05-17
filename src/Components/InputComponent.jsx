import React from "react";
import "../Styles/InputComponent.css";
const InputComponent = () => {
  return (
    <>
      <input
        className="request__input"
        type="text"
        placeholder="Enter Your Email Address"
      />
      <button className="request__button">
        <span>Request Demo</span>
      </button>
    </>
  );
};

export default InputComponent;
