import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Home } from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { Login, Navbar, RegisterUser } from "./components/index";
import "./custom.css";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapdispatchToProps = (dispatch) => ({});

class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Navbar />
        <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={RegisterUser} />
        </Switch>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapdispatchToProps)(App));
