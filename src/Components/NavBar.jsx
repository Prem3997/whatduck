import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <nav className="navbar__logo">
        <Link className="whatduck__logo" to="/">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="64"
              height="63.6995"
              rx="20"
              fill="url(#paint0_linear_323_874)"
              fillOpacity="0.6"
            />
            <path
              d="M19.8308 34.2535C19.8308 36.1869 20.2117 38.1015 20.9516 39.8877C21.6915 41.674 22.776 43.2971 24.1431 44.6642C25.5103 46.0314 27.1333 47.1159 28.9196 47.8558C30.7059 48.5957 32.6204 48.9765 34.5539 48.9765C36.4873 48.9765 38.4018 48.5957 40.1881 47.8558C41.9744 47.1159 43.5974 46.0314 44.9646 44.6642C46.3317 43.2971 47.4162 41.674 48.1561 39.8877C48.896 38.1015 49.2769 36.1869 49.2769 34.2535L34.5539 34.2535L19.8308 34.2535Z"
              fill="#FAFAFA"
            />
            <path
              d="M16.9404 23.7347C18.497 20.8035 22.135 19.689 25.0663 21.2456C27.9976 22.8021 29.112 26.4401 27.5555 29.3714C25.999 32.3027 22.3609 33.4171 19.4296 31.8606L14.1221 29.0422L16.9404 23.7347Z"
              fill="#FAFAFA"
            />
            <defs>
              <linearGradient
                id="paint0_linear_323_874"
                x1="3.71014"
                y1="17.0624"
                x2="105.344"
                y2="41.9944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F545E4" />
                <stop offset="1" stopColor="#3B2BFF" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <Link className="logo__text" to="/">
          WHATDUCK
        </Link>
      </nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/">
        Features
      </Link>
      <Link className="link" to="/">
        How It Works
      </Link>
      <Link className="link" to="/">
        Integrations
      </Link>
      <button className="button__login" to="/">
        <span>
        Login / Signup
        </span>
      </button>
    </nav>
  );
}
