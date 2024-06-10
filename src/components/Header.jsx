import { Link } from "react-router-dom";

import { LOGO_URL } from "../common/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} />
    </div>
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
