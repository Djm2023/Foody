import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Header = () => {
  const [btnTxt, setBtnTxt] = useState("Login");

  const handleBtnClick = () => {
    btnTxt === "Login" ? setBtnTxt("Register") : setBtnTxt("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li>Add to Cart</li>
          <li className="login-li">
            <button onClick={handleBtnClick} className="loginBtn">
              {btnTxt}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
