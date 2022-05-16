import "./App.css";
import FooterMain from "./Pages/FooterMain";
import HomePage from "./Pages/HomePage";
import HowItWorks from "./Pages/HowItWorks";
import IntegrationPage from "./Pages/IntegrationPage";
import ProductPage from "./Pages/ProductPage";
import RequestPage from "./Pages/RequestPage";
import SecondPage from "./Pages/SecondPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductPage />
      <HowItWorks />
      <SecondPage />
      <IntegrationPage />
      <RequestPage />
      <FooterMain />
    </div>
  );
}

export default App;
