import React, { useState } from "react";
import useStyles from "./navbarStyle";
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider,
  Backdrop,
  Modal,
  Fade,
  Box,
  Button,
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
const DrawerMenu = ({ user, logout }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
        {/* <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Assignment className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Assignments"} />
        </ListItem>
        
        <ListItem
          button
          component={Link}
          // to={`/messages`}
          style={{ color: "inherit" }}
        >
          <ListItemIcon>
            <ErrorOutline className={classes.iconButton} />
          </ListItemIcon>
          <ListItemText primary={"Notices"} />
        </ListItem> */}
        {/* ) : (
          "Start Messaging"
        )} */}
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <Schedule className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Class Routine"} />
        </ListItem>
        <ListItem
          button
          style={{ color: "inherit" }}
          component={Link}
          to="/user/modules"
        >
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
        {user && user.user_role === "admin" ? (
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
        ) : null}
        <ListItem button style={{ color: "inherit" }}>
          <ListItemIcon>
            <LibraryBooks className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"E-Library"} />
        </ListItem>
        <ListItem
          button
          style={{ color: "inherit" }}
          onClick={() => setOpen(true)}
        >
          <ListItemIcon>
            <ExitToApp className={classes.iconButton} />{" "}
          </ListItemIcon>
          <ListItemText primary={"Log Out"} />
        </ListItem>
      </List>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">LOGOUT</h2>
            <p id="transition-modal-description">
              Are you sure you want to logout?
            </p>
            <Box mt={3} />
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={() => logout()}
            >
              Yes
            </Button>
            <Box mt={3} />
            <Button
              type="button"
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DrawerMenu;
