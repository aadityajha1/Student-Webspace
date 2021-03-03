import React, { Component } from "react";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Home } from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { Login, Navbar, RegisterUser } from "./components/index";
import NavMenu from "./components/NavMenu";
import "./custom.css";
import { login, registerStudent, getUser } from "./redux/Auth/authActions";
import { fetchIntake } from "./redux/Intake/intakeActions";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    intake: state.intake,
  };
};

const mapdispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
  registerStudent: (
    username,
    password,
    email,
    user_role,
    intakeid,
    fullname,
    gender
  ) =>
    dispatch(
      registerStudent(
        username,
        password,
        email,
        user_role,
        intakeid,
        fullname,
        gender
      )
    ),
  fetchIntake: () => dispatch(fetchIntake()),
  getUser: () => dispatch(getUser()),
});

class App extends Component {
  static displayName = App.name;
  componentDidMount() {
    this.props.getUser();
    this.props.fetchIntake();
  }
  render() {
    // const location = useLocation();
    return (
      <>
        {window.location.pathname.split("/")[1] === "user" ? (
          <Navbar user={this.props.auth.user} />
        ) : (
          <NavMenu />
        )}
        <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route
            exact
            path="/user/login"
            component={() => (
              <Login login={this.props.login} user={this.props.auth.user} />
            )}
          />
          <Route
            exact
            path="/user/register"
            component={() => (
              <RegisterUser
                registerStudent={this.props.registerStudent}
                intake={this.props.intake.intake}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapdispatchToProps)(App));
