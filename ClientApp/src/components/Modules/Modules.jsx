import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import useStyles from "./modulesStyle";

const Modules = (props) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.toolbar} />
        <Typography variant="h5">Modules</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/user/addmodule"
          style={{ color: "white" }}
        >
          Add Module
        </Button>
      </Container>
    </>
  );
};

export default Modules;
