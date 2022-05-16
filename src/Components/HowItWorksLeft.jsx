import React from "react";
import "../Styles/HowItWorksLeft.css";
const HowItWorksLeft = () => {
  return (
    <>
      <img
        src="/assets/images/Cloud.png"
        alt="width"
        width={62}
        height={40}
        className="cloud"
      />
      <img
        src="/assets/images/Star.png"
        alt="width"
        width={24}
        height={24}
        className="star"
      />
      <article className="howitworks__article">
        <h1 className="howitworks__title">Truly scriptless</h1>
        <p className="howitworks__desc">
          Upload your app on our platform and simply navigate through it. We
          automatically create Tests that can be replayed with every app update,
          across devices and screen resolutions. No more flaky scripts anywhere,
          anymore!
        </p>
      </article>
      <img
        src="/assets/images/SideEllipse.png"
        alt="width"
        width={100}
        height={200}
        className="SideEllipse"
      />
    </>
  );
};

export default HowItWorksLeft;
