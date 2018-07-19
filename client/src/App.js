import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
