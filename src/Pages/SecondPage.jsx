import React from "react";
import SecondPageLeft from "../Components/SecondPageLeft";
import SecondPageRight from "../Components/SecondPageRight";
import "../Styles/SecondPage.css";
const SecondPage = () => {
  return (
    <section className="secondpage__container">
      <SecondPageLeft />
      <SecondPageRight />
    </section>
  );
};

export default SecondPage;
