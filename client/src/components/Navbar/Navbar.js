import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from '../../pages/Login';
import API from "../../utils/API";

class Navbar extends React.Component {

  state = {
    loggedin: false,
    modal: false,
    screenName:"",
    button:"Login"
  };

  componentDidMount() {
    this.check_login();
  }

  check_login = () => {
    API.loginTest().then(res=>{      
      if (res.data.success){
        this.setState({
          screenName:res.data.user,
          button:"Logout"
        });
      }
    }).catch(err =>
      this.setState({
        screenName:"",
        button:"Login"
      })
    )
  }

  toggle = () => {
    this.check_login()
      this.setState({
        modal: !this.state.modal,
      })
  };

  userLogout = () => {
    API.logoutUser().then(res=>{
      console.log(res)
      this.setState({
        screenName:"",
        button:"Login"
      })
    }
    );  
  }
    

  render() {
    return (
      <nav className={
        window.location.pathname === "/" ||
          window.location.pathname === "/home"
          ? "navbar navbar-expand-lg fixed-top"
          : "navbar navbar-expand-lg"}
        style={
          window.location.pathname === "/" ||
          window.location.pathname === "/home"
            ? {position: "absolute"}
            : {position: "relative"}
        }
          >
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
        <div className="ml-auto d-flex flex-row">   
        <h1><span className="badge badge-pill badge-warning mr-3">{this.state.screenName}</span></h1>
          <button
            className=
            "btn nav-item btn-outline-light ml-auto"
            type="submit"
            onClick={this.state.button==="Login" ? this.toggle : this.userLogout}
          >
            {this.state.button}
        </button>
          <Login toggle={this.toggle} open={this.state.modal} />
        </div>
      </nav>
    )
  }

};

export default Navbar;
