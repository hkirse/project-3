import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from '../../pages/Login';


class Navbar extends React.Component {

  state = {
    loggedin: false,
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <nav className={
        window.location.pathname === "/" ||
          window.location.pathname === "/home"
          ? "navbar navbar-expand-lg fixed-top"
          : "navbar navbar-expand-lg"}>
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
        <div className="ml-auto">
          <button
            className=
            "btn nav-item btn-outline-light ml-auto"
            type="submit"
            onClick={this.toggle}
          >
            Login
        </button>
          <Login toggle={this.toggle} open={this.state.modal} />
        </div>
      </nav>
    )
  }

};

export default Navbar;
