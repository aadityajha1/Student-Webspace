import React from "react";
import useStyles from "./navbarStyle";
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider,
} from "@material-ui/core";
import {
  ExitToApp,
  Dashboard,
  Assignment,
  ErrorOutline,
  Schedule,
  Today,
  Notes,
  LibraryBooks,
} from "@material-ui/icons";

import { Link } from "react-router-dom";
const DrawerMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <Hidden xsDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Grid container justify="center">
        <Grid item>
          <img
            src={"logo.png"}
            alt="Logo"
            height="150"
            width="auto"
            style={{ color: "red" }}
          />
        </Grid>
      </Grid>
      <Divider />

      <List>
        <ListItem
          button
          component={Link}
          to="/user/dashboard"
          style={{ color: "inherit" }}
        >
          <ListItemIcon>
            <Dashboard className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/products"
          style={{ color: "inherit" }}
        >
          <ListItemIcon>
            {/* <ShoppingCartOutlined className={classes.iconButton} />{" "} */}
            <img
              src={"/icons/exam.svg"}
              alt="Exam Logo"
              height="20"
              width="20"
              className={classes.iconButton}
            />
          </ListItemIcon>
          <ListItemText primary={"Results"} />
        </ListItem>
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Assignment className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Assignments"} />
        </ListItem>
        {/* {rooms.length ? ( */}
        <ListItem
          button
          component={Link}
          to={`/messages`}
          style={{ color: "inherit" }}
        >
          <ListItemIcon>
            <ErrorOutline className={classes.iconButton} />
          </ListItemIcon>
          <ListItemText primary={"Notices"} />
        </ListItem>
        {/* ) : (
          "Start Messaging"
        )} */}
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Schedule className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Class Routine"} />
        </ListItem>
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Notes className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Modules"} />
        </ListItem>
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Today className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Academic Planner"} />
        </ListItem>
        <ListItem
          button
          style={{ color: "inherit" }}
          component={Link}
          to="/user/register"
        >
          <ListItemIcon>
            <Today className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Register New Student"} />
        </ListItem>
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <LibraryBooks className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"E-Library"} />
        </ListItem>
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <ExitToApp className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Log Out"} />
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerMenu;
