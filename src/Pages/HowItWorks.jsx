import React from "react";
import HowItWorksLeft from "../Components/HowItWorksLeft";
import HowItWorksRight from "../Components/HowItWorksRight";
import "../Styles/HowItWorks.css";
const HowItWorks = () => {
  return (
    <div className="howitworks__page">
      <HowItWorksLeft />
      <HowItWorksRight/>
    </div>
  );
};

export default HowItWorks;
