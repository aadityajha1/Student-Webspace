import React, { useState, useEffect } from "react";
import {
  Avatar,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Grid,
  CssBaseline,
  Hidden,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";

import { MenuOutlined } from "@material-ui/icons";
import useStyles from "./navbarStyle";
import { Link, useLocation } from "react-router-dom";
// import MessageList from "./messagesList";
import DrawerMenu from "./Drawer";
// import clsx from ''

const Navbar = ({ window, user }) => {
  // const [isChecked, setIsChecked] = useState(false);
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleClick = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="inherit" position="absolute" className={classes.appBar}>
        <Toolbar>
          <Grid container className={classes.navbar} spacing={2}>
            <Grid item>
              <IconButton
                color="inherit"
                edge="start"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                {" "}
                <MenuOutlined />{" "}
              </IconButton>

              <Typography
                variant="h4"
                style={{
                  marginTop: "15px",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                component={Link}
                color="inherit"
                to="/"
              >
                User Dashboard
              </Typography>
            </Grid>
            {location.pathname !== "/user/login" ? (
              user !== null ? (
                <Grid item>
                  <IconButton onClick={handleClick}>
                    <Avatar src={"profile.png"} />
                  </IconButton>
                </Grid>
              ) : (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/user/login"
                    style={{ color: "white" }}
                  >
                    Login
                  </Button>
                </Grid>
              )
            ) : null}
            <Menu
              id="profile-menu"
              color="primary"
              style={{
                marginTop: "40px",
                // color: "#121212",
                // color: "whitesmoke",
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              anchorEl={anchorEl}
            >
              <Link
                to="/user/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem component={Link} to="/user/profile">
                  View Profile
                </MenuItem>
              </Link>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
      {location.pathname !== "/user/login" &&
      location.pathname !== "/user/register" ? (
        <nav className={classes.drawer} aria-label="dashboard folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              // className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {<DrawerMenu />}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              // style={{ position: "fixed" }}
              open
            >
              {/* {DrawerMenu} */}
              <DrawerMenu />
            </Drawer>
            {/* )} */}
          </Hidden>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
