import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      CrankHeads
    </Link>
    <div>
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
            Personal Page
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/personal"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/connect"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
