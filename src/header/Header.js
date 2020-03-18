import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Header.scss";

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Link>
      <Link
        style={{
          color: "#4c6873",
          marginRight: "40px",
          fontSize: "1.6em"
        }}
        to="/change-password"
      >
        {" "}
        Change Password{" "}
      </Link>

      <Link
        style={{
          color: "#4c6873",
          marginRight: "40px",
          fontSize: "1.6em"
        }}
        to="/sign-out"
      >
        {" "}
        Sign Out{" "}
      </Link>
    </Nav.Link>
  </React.Fragment>
);

const unauthenticatedOptions = (
  <React.Fragment>
    <Nav.Link>
      <Link
        style={{
          color: "#4c6873",
          marginRight: "40px",
          fontSize: "1.6em"
        }}
        to="/sign-up"
      >
        Sign Up
      </Link>

      <Link
        style={{
          color: "#4c6873",
          marginRight: "40px",
          fontSize: "1.6em"
        }}
        to="/sign-in"
      >
        Sign In
      </Link>
    </Nav.Link>
  </React.Fragment>
);

const alwaysOptions = (
  <React.Fragment>
    <Nav.Link>
      <Link
        style={{
          color: "#4c6873",
          marginRight: "40px",
          fontSize: "1.6em"
        }}
        to="/"
      >
        Home
      </Link>
    </Nav.Link>
  </React.Fragment>
);

const Header = ({ user }) => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img height="85px" src={require("./logo.png")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={{
              color: "#4c6873",
              marginRight: "40px",
              fontSize: "1.6em"
            }}
          >
            {user && <span>Welcome, {user.email} </span>}
          </Nav.Link>

          <Nav.Link eventKey={0} href="#link">
            {user ? authenticatedOptions : unauthenticatedOptions}
          </Nav.Link>
          <Nav.Link>{alwaysOptions}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Header;
  <header className="main-header">
    <img src={require('./logo.png')} alt="Logo"/>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
