import React from "react";
import "../Styles/SecondPageRight.css"
const SecondPageRight = () => {
  return (
    <>
      <article className="second__article">
        <h1 className="second__title">Smarter testing</h1>
        <p className="second__desc">
          Get your entire team on a single platform to see what's up with the
          product and provide real-time feedback. Get all bug, feedback requests
          at a single place with added insights- no more decision paralysis!
          Faster fixes, faster releases, furiously fast growth!
        </p>
      </article>
      <img
        src="/assets/images/Union.png"
        alt="union"
        width={200}
        height={100}
        className="union"
      />
    </>
  );
};

export default SecondPageRight;
