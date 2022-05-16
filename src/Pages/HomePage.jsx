import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/HomePage.css";
import LandingPage from "./LandingPage";
export default function HomePage() {
  return (
    <div className="container__homepage">
      <NavBar />
      <LandingPage />
    </div>
  );
}
