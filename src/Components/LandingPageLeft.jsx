import React from "react";
import "../Styles/LandingPageLeft.css";

export default function LandingPageLeft() {
  return (
    <section className="landingPageLeft">
      <h1 className="title">
        <span className="text_1">Rapid releases. Fewer Bugs.</span>
        <span className="text_2">Discover. Design. Develop.</span>
      </h1>
      <h3 className="subtitle awesome">Awesome apps.</h3>
      <p className="title__desc">
        Modern, collaborative, no-code platform for automated mobile app testing
      </p>
      <button className="request__demo">
        <span>Request Demo</span>
      </button>
    </section>
  );
}
