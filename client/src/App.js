import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Navbar />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
