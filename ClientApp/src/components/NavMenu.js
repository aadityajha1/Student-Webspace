import React, { Component } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bolder",
            }}
          >
            <NavbarBrand tag={Link} to="/">
              <img src={"logo.png"} height="80" width="80" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/dashboard">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem className="ml-4">
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 0,
                      border: "2px solid #48B2E3",
                      color: "#48B2E3",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bolder",
                      width: 130,
                    }}
                    component={Link}
                    to="/user/login"
                  >
                    LOGIN
                  </Button>
                </NavItem>
                <NavItem className="ml-2">
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      borderRadius: 0,
                      // border: "2px solid #48B2E3",
                      backgroundColor: "#48B2E3",
                      color: "white",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bolder",
                      width: 130,
                    }}
                    component={Link}
                    to="/user/register"
                  >
                    Register
                  </Button>
                </NavItem>
              </ul>
              <Nav className="ml-auto"></Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
