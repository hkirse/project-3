import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-center">
    {props.children}
  </div>
);

export default Jumbotron;
