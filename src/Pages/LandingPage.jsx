import React from "react";
import Footer from "../Components/Footer";
import LandingPageLeft from "../Components/LandingPageLeft";
import LandingPageRight from "../Components/LandingPageRight";
import "../Styles/LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <main className="main__landingpage">
        <LandingPageLeft />
        <LandingPageRight />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
