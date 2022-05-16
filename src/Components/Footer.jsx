import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <svg
        id="footer__svg"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="52%">
            <stop offset="10%" stopColor="#000000" stopOpacity="1"></stop>
            <stop offset="50%" stopColor="#c20aaf" stopOpacity="1"></stop>
            <stop offset="90%" stopColor="#3B2BFF" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#000000" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 97.38755980861242,309.5980861244019 194.77511961722485,269.19617224880386 288,307 C 381.22488038277515,344.80382775119614 470.2870813397129,460.8133971291866 572,478 C 673.7129186602871,495.1866028708134 788.0765550239236,413.55023923444975 891,368 C 993.9234449760764,322.44976076555025 1085.4066985645934,312.9856459330144 1175,316 C 1264.5933014354066,319.0143540669856 1352.2966507177034,334.5071770334928 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <p className="footer__desc">Trusted by modern product teams</p>
      <img className="footer__trustedBy" src="/assets/images/Trustedby.png" alt="trustedby" width="1180px" height="80px"/>
    </footer>
  );
};

export default Footer;
