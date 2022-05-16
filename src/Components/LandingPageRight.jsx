import React from "react";
import "../Styles/LandingPageRight.css";

const LandingPageRight = () => {
  return (
    <aside className="landingPageRight">
      <img
        src="/assets/images/Laptop.png"
        alt="laptop"
        className="laptop__image"
        width={600}
        height={450}
      />
    </aside>
  );
};

export default LandingPageRight;
