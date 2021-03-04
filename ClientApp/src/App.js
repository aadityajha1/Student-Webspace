import React, { Component } from "react";
import {
  Route,
  Switch,
  withRouter,
  useLocation,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { Home } from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  Login,
  Navbar,
  RegisterUser,
  AddModule,
  Modules,
} from "./components/index";
import NavMenu from "./components/NavMenu";
// import
import "./custom.css";
import {
  login,
  registerStudent,
  getUser,
  logout,
  successfalse,
  getAllusers,
} from "./redux/Auth/authActions";
import { fetchIntake } from "./redux/Intake/intakeActions";
import {
  fetchModules,
  addmodule,
  deleteModule,
  editModule,
} from "./redux/Module/moduleActions";
import { fetchCourses } from "./redux/Course/courseActions";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    intake: state.intake,
    module: state.module,
    course: state.course,
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
  fetchCourses: () => dispatch(fetchCourses()),
  fetchModules: () => dispatch(fetchModules()),
  addmodule: (module) => dispatch(addmodule(module)),
  logout: () => dispatch(logout()),
  successfalse: () => dispatch(successfalse()),
  deleteModule: (id) => dispatch(deleteModule(id)),
  editModule: (id, module) => dispatch(editModule(id, module)),
  getAllusers: () => dispatch(getAllusers()),
});

class App extends Component {
  static displayName = App.name;
  componentDidMount() {
    this.props.getUser();
    this.props.fetchIntake();
    this.props.fetchCourses();
    this.props.fetchModules();
    this.props.getAllusers();
  }
  render() {
    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth.user !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/user/login", state: { from: props.location } }}
            />
          )
        }
      />
    );

    return (
      <>
        {window.location.pathname.split("/")[1] === "user" ? (
          <Navbar user={this.props.auth.user} logout={this.props.logout} />
        ) : (
          <NavMenu />
        )}
        <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/user/dashboard" component={Dashboard} />
          <Route
            exact
            path="/user/login"
            component={() => (
              <Login
                login={this.props.login}
                user={this.props.auth.user}
                isLoading={this.props.auth.isLoading}
                success={this.props.auth.success}
              />
            )}
          />
          <Route
            exact
            path="/user/register"
            component={() => (
              <RegisterUser
                registerStudent={this.props.registerStudent}
                intake={this.props.intake.intake}
                isLoading={this.props.auth.isLoading}
                success={this.props.auth.success}
                message={this.props.auth.message}
                errMess={this.props.auth.errMess}
                successfalse={this.props.successfalse}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/user/modules"
            component={() => (
              <Modules
                user={this.props.auth.user}
                modules={this.props.module.modules}
                deleteModule={this.props.deleteModule}
                message={this.props.module.message}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/user/addmodule"
            component={() => (
              <AddModule
                intake={this.props.intake.intake}
                addmodule={this.props.addmodule}
                courses={this.props.course.courses}
                editModule={this.props.editModule}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/user/module/edit/:id"
            component={() => (
              <AddModule
                intake={this.props.intake.intake}
                addmodule={this.props.addmodule}
                courses={this.props.course.courses}
                editModule={this.props.editModule}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapdispatchToProps)(App));
