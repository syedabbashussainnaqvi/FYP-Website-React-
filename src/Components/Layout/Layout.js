import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
