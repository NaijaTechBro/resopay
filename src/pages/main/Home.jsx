import React from "react";
import { Link } from "react-router-dom";
import loginImg  from "../../assets/auth-phone.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Save your<br/> Way to Financial<span>Freedom.</span></h2>
          <p>
          We bring you a new to save, budget and managing all your spendings in one place.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="hero-button">
              <Link to={"/register"}>Start Saving</Link>
            </button>
            {/* <button className="--btn --btn-primary">
              <Link to={"/login"}>Login</Link>
            </button> */}
          </div>
        </div>

        <div className="hero-image">
          <img src={loginImg} alt="Inventory" />
        </div>
      </section>
    </>
  );
};

export default Home;
