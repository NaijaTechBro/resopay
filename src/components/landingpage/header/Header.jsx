import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
// import { ShowOnLogin, ShowOnLogout } from "../../protect/HiddenLink";

const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          {/* <BiLogIn size={35} /> */}
          <span>ResoPay</span>
        </div>

        <ul className="home-links">
            <li className="--flex-center">
              &nbsp;
              {/* <UserName /> */}
            </li>
            <li>
              <button className="button-login">
                <Link to="/login">Login</Link>
              </button>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
