import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Route, Switch, Redirect } from "react-router-dom";
import Classification from "./Components/Classification/Classification";
import ChangeDetection from "./Components/changeDetection/changeDetection";
class App extends Component {
  render() {
    let paths = (
      <Switch>
        <Route path="/changeDetection" component={ChangeDetection} />
        <Route path="/classification" component={Classification} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    );
    return <Layout>{paths}</Layout>;
  }
}

export default App;
