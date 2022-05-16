import React from "react";
import "../Styles/FooterMain.css";
const FooterMain = () => {
  return (
    <footer className="footer__main">
      <p className="footer__main__desc">Catch us candid here</p>
      <div className="footer__main__logo">
        <div className="footer__linkedin">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.2627 27.2693H22.524V19.844C22.524 18.0733 22.488 15.7947 20.0547 15.7947C17.584 15.7947 17.2067 17.7213 17.2067 19.7133V27.2693H12.468V12H17.02V14.0813H17.0813C17.7173 12.8813 19.264 11.6147 21.5747 11.6147C26.376 11.6147 27.264 14.7747 27.264 18.888V27.2693H27.2627ZM7.116 9.91067C5.59067 9.91067 4.36533 8.676 4.36533 7.15733C4.36533 5.64 5.592 4.40667 7.116 4.40667C8.636 4.40667 9.868 5.64 9.868 7.15733C9.868 8.676 8.63467 9.91067 7.116 9.91067ZM9.492 27.2693H4.74V12H9.492V27.2693ZM29.6333 0H2.36133C1.056 0 0 1.032 0 2.30533V29.6947C0 30.9693 1.056 32 2.36133 32H29.6293C30.9333 32 32 30.9693 32 29.6947V2.30533C32 1.032 30.9333 0 29.6293 0H29.6333Z"
              fill="white"
            />
          </svg>
          <span className="footer__main__links">LinkedIn</span>LinkedIn
        </div>
        <div className="footer__linkedin">
          <img src="assets/images/Medium.png" alt="medium" />
          <span className="footer__main__links">Medium</span>
        </div>
      </div>
      <div className="footer__links">
        <div>
          <p className="footer__title">WORKDUCK</p>
          <p className="footer__des">
            Modern, collaborative, no-code platform for automated app testing
          </p>
        </div>
        <li className="footer__link">Home</li>
        <li className="footer__link">How it works</li>
        <li className="footer__link">Features</li>
        <li className="footer__link">Integrations</li>
      </div>
      <a href="https://www.linkedin.com/in/prem-balaji-429583162/" className="footer__developer">Developed By PremBalaji. Click Here.</a>
    </footer>
  );
};

export default FooterMain;
