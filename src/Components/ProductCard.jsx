import React from "react";
import "../Styles/ProductCard.css";
const ProductCard = ({ title, desc, icon }) => {
  return (
    <div className="product__card">
      <img
        className="product__card__img"
        src={`/assets/images/${icon}.png`}
        alt="vector"
        width={70}
        height={70}
      />
      <h4 className="product__card__title">{title}</h4>
      <p className="product__card__desc">{desc}</p>
    </div>
  );
};

export default ProductCard;
