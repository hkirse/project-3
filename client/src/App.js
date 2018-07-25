import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from './pages/Home';
import Connect from './pages/Connect';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" className="navbar navbar-expand-lg fixed-top" component={Home} />
            {/* <Route exact path="/personal" component={Personal} /> */}
            <Route exact path="/connect" component={Connect} />
            {/* <Route exact path="/discover" component={Discover} /> */}
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
