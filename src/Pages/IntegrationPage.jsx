import React from "react";
import IntegrationPageLeft from "../Components/IntegrationPageLeft";
import IntegrationPageRight from "../Components/IntegrationPageRight";
import "../Styles/IntegrationPage.css"
const IntegrationPage = () => {
  return (
    <section className="integration__page">
      <IntegrationPageLeft />
      <IntegrationPageRight />
    </section>
  );
};

export default IntegrationPage;
