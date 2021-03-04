import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  IconButton,
  CardActions,
  Menu,
  MenuItem,
  Snackbar,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { MoreVert } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import useStyles from "./modulesStyle";

const Modules = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (props.message) {
      setOpen(true);
    }
  }, [props.message]);
  const handleClick = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.toolbar} />
        <Typography variant="h5">Modules</Typography>
        <Box mt={4} />
        {props.user && props.user.user_role === "admin" ? (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/user/addmodule"
            style={{ color: "white" }}
          >
            Add Module
          </Button>
        ) : null}
        <Box mb={5} />

        <Grid container spacing={4}>
          {props.modules.map((module) => (
            <Grid item xs={12} md={4} key={module.id}>
              <Card className={classes.root}>
                {/* <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                /> */}
                <CardMedia
                  image={"aspnet.png"}
                  title={module.name}
                  className={classes.media}
                />
                <CardContent>
                  <Grid
                    container
                    justify="space-between"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        gutterBottom
                        // component="h5"
                        // style={{ display: "inline-block" }}
                      >
                        {module.name}
                      </Typography>
                    </Grid>
                    {props.user.user_role === "admin" ? (
                      <Grid item>
                        <CardActions>
                          <IconButton
                            aria-label="settings"
                            onClick={handleClick}
                            style={{
                              display: "inline-block",
                              padding: 0,
                              marginRight: "1%",
                            }}
                          >
                            <MoreVert />
                          </IconButton>
                        </CardActions>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          className={classes.modal}
                          open={modalOpen}
                          onClose={() => setModalOpen(false)}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={modalOpen}>
                            <div className={classes.modalpaper}>
                              <h4 id="transition-modal-title">DELETE</h4>
                              <p id="transition-modal-description">
                                Are you sure you want to delete this Module?
                              </p>
                              <Box mt={3} />
                              <Button
                                type="button"
                                color="primary"
                                variant="contained"
                                onClick={() => props.deleteModule(module.id)}
                              >
                                Yes
                              </Button>
                              <Box mt={3} />
                              <Button
                                type="button"
                                variant="contained"
                                onClick={() => setModalOpen(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </Fade>
                        </Modal>
                      </Grid>
                    ) : null}
                  </Grid>
                </CardContent>
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
                    to={`/user/module/edit/${module.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <MenuItem>Edit</MenuItem>
                  </Link>
                  <MenuItem button onClick={() => setModalOpen(true)}>
                    Delete
                  </MenuItem>
                </Menu>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => {
            // successfalse();
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            elevation={6}
            variant="filled"
          >
            {props.message}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default Modules;
