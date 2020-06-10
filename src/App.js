import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Route, Switch, Redirect } from "react-router-dom";
import Classification from "./Components/Classification/Classification";
import ChangeDetection from "./Components/changeDetection/changeDetection";
import ProjectDiscription from "./Components/Navigation/UI/ProjectDiscription/ProjectDiscription";
class App extends Component {
  render() {
    let toolbarFlag = false;
    let paths = (
      <Switch>
        <Route path="/changeDetection" component={ChangeDetection} />
        <Route path="/classification" component={Classification} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/home" exact component={Home} />
        <Route path="/projectdiscription/:id" component={ProjectDiscription} />
        <Route path="/" exact component={Home} />
      </Switch>
    );
    return <Layout toolbarFlag={toolbarFlag}>{paths}</Layout>;
  }
}

export default App;
