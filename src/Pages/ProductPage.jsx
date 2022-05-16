import React from "react";
import ProductCard from "../Components/ProductCard";
import ProductPageDescription from "../Components/ProductPageDescription";
import "../Styles/ProductPage.css";
const ProductPage = () => {
  return (
    <main className="product__page">
      <ProductPageDescription />
      <div className="product__cards__container">
        <ProductCard
          title="Built for collaboration"
          desc=" Bring your team on one platform - get insights to take product decisions
        faster"
          icon="Network"
        />
        <ProductCard
          title="Framework independent"
          desc="No need for creating and maintaining multiple frameworks for varied test cases"
          icon="Framework"
        />
        <ProductCard
          title="App type agnostic"
          desc="Test all kinds of mobile apps- native, hybrid, android, iOS"
          icon="Application"
        />
        <ProductCard
          title="Interactive testing"
          desc="Create test cases on the go while browsing through the app"
          icon="Testing"
        />
        <ProductCard
          title="Effortless bug reporting"
          desc="Automated bug reports integrated to your project management and CI/CD tools"
          icon="Bug"
        />
        <ProductCard
          title="All Black-Box testing"
          desc="No source code analysis. All forms of Black-box testing is handled at one place"
          icon="Box"
        />
      </div>
    </main>
  );
};

export default ProductPage;
