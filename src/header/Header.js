import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
);

const unauthenticatedOptions = (
  <React.Fragment>
    <Link style={{ color: "#d9d4cc" }} to="/sign-up">
      Sign Up
    </Link>
    <Link style={{ color: "#d9d4cc" }} to="/sign-in">
      Sign In
    </Link>
  </React.Fragment>
);

const alwaysOptions = (
  <React.Fragment>
    <Link style={{ color: "#d9d4cc" }} to="/">
      Home
    </Link>
  </React.Fragment>
);

const Header = ({ user }) => (
  <header className="main-header">
    <img height="95px" src={require("./logo.png")} />
    <nav>
      {user && <span>Welcome, {user.email}</span>}
      {user ? authenticatedOptions : unauthenticatedOptions}
      {alwaysOptions}
    </nav>
  </header>
);

export default Header;
