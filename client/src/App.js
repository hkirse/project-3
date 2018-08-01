import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from './pages/Home';
import Personal from './pages/Personal';
import Connect from './pages/Connect';
import Discover from './pages/Discover';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/personal" component={Personal} />
              <Route exact path="/connect" component={Connect} />
              <Route exact path="/discover" component={Discover} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
