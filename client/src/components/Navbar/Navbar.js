import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <Link className="navbar-brand" to="/">
      CrankHeads
    </Link>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/personal"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/personal" className="nav-link">
            Personal
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/connect"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/connect" className="nav-link">
            Connect
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>
      </ul>
      <div className="nav navbar-nav ml-auto">
        <button
          className=
            "btn nav-item btn-outline-light"
            type="submit"
        >
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </button>
      </div>
  </nav>
);

export default Navbar;
