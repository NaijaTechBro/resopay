import React from "react";
import './Footer.scss';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

const goHome = () => {
  navigate("/");
};

  return (
    <>
    <div className="footer">
    <div className="logo" onClick={goHome}>
          {/* <BiLogIn size={35} /> */}
          <span>ResoPay</span>
          <div className="footer-text">
        <h2>We are simplifying your financial needs by helping you with your Savings and Budget.</h2>
        <p>ResoPay Inc | All Rights Reserved. &copy; 2023</p>
        </div>
        </div>
      <hr className="--color-dark" />
      </div>
    </>
  );
};

export default Footer;
