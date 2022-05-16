import React from "react";
import "../Styles/InputComponent.css"
const InputComponent = () => {
  return (
    <>
      <input className="request__input" type="text" placeholder="Enter Your Email Address" />
      <button className="request__button">Request Demo</button>
    </>
  );
};

export default InputComponent;
