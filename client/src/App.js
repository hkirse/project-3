import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/personal" component={Personal} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/discover" component={Discover} /> */}
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
