import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
  Hidden,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm, Controller } from "react-hook-form";
import useStyles from "./registerUserStyle";
import { useHistory } from "react-router-dom";
const RegiterUser = ({
  registerStudent,
  intake,
  isLoading,
  success,
  message,
  errMess,
  successfalse,
}) => {
  const classes = useStyles();
  const methods = useForm();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    if (!data.password) {
      methods.setError("password", {
        type: "manual",
        message: "Password is required ",
      });
    }
    if (!data.username) {
      methods.setError("username", {
        type: "manual",
        message: "Useranme is required ",
      });
    }
    if (!data.email) {
      methods.setError("email", {
        type: "manual",
        message: "Email is required ",
      });
    }
    if (!data.intakeid) {
      methods.setError("intakeid", {
        type: "manual",
        message: "Please select Intake code ",
      });
    }
    if (data.password && data.password.length < 6) {
      methods.setError("password", {
        type: "manual",
        message: "Password must be at least 6 chatacters long ",
      });
    } else {
      registerStudent(
        data.username,
        data.password,
        data.email,
        data.user_role,
        data.intakeid,
        data.fullname,
        data.gender
      );
    }
  };
  useEffect(() => {
    if (!isLoading && success && message) {
      setOpen(true);

      setTimeout(() => {
        history.push("/user/dashboard");
      }, 6000);
    }
  }, [success, isLoading]);

  useEffect(() => {
    if (!isLoading && errMess !== null) {
      setAlert(true);
    }
  }, [isLoading, errMess]);

  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.toolbar} />
        <Box mt={5} />
        <Paper elevation={2} className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <img src={"cloud.png"} height="450" width="auto" />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6} justify="center">
              <Typography variant="h5" gutterBottom align="center">
                Register New Student
              </Typography>
              <Box mb={4} />
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <Grid
                    container
                    spacing={3}
                    alignContent="center"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={7}>
                      <Controller
                        name="fullname"
                        control={methods.control}
                        defaultValue=""
                        as={
                          <TextField
                            autoFocus
                            fullWidth
                            required
                            variant="outlined"
                            label="Full Name"
                            placeholder="Enter Full Name"
                          />
                        }
                      />
                      {/* {methods.errors &&} */}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Controller
                        name="username"
                        control={methods.control}
                        defaultValue=""
                        as={
                          <TextField
                            fullWidth
                            required
                            label="Username"
                            placeholder="Enter Username"
                            variant="outlined"
                          />
                        }
                      />
                      {methods.errors.username && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {methods.errors.username.message}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Controller
                        name="email"
                        control={methods.control}
                        defaultValue=""
                        as={
                          <TextField
                            fullWidth
                            required
                            label="Email"
                            placeholder="Enter Email"
                            variant="outlined"
                          />
                        }
                      />
                      {methods.errors.email && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {methods.errors.email.message}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Controller
                        name="password"
                        control={methods.control}
                        defaultValue=""
                        as={
                          <TextField
                            fullWidth
                            required
                            label="Password"
                            placeholder="Enter Password"
                            variant="outlined"
                          />
                        }
                      />
                      {methods.errors.password && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {methods.errors.password.message}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <InputLabel htmlFor="user_role">
                        Select User Role
                      </InputLabel>
                      <Controller
                        name="user_role"
                        control={methods.control}
                        defaultValue="student"
                        as={
                          <Select id="user_role" fullWidth>
                            <MenuItem value="student">Student</MenuItem>
                            <MenuItem value="account">Accounts Staff</MenuItem>
                            <MenuItem value="lecturer">Lecturer</MenuItem>
                          </Select>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <InputLabel htmlFor="intake">Select Intake</InputLabel>
                      <Controller
                        name="intakeid"
                        control={methods.control}
                        // defaultValue={intake[0].id}
                        as={
                          <Select
                            label="Select Intake"
                            placeholder="Select Intake"
                            id="intake"
                            fullWidth
                          >
                            {intake.map((int) => (
                              <MenuItem key={int.id} value={int.id}>
                                {int.name}
                              </MenuItem>
                            ))}
                          </Select>
                        }
                      />
                      {methods.errors.intakeid && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {methods.errors.intakeid.message}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Grid container spacing={4}>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained">Cancel</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </FormProvider>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            successfalse();
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            elevation={6}
            variant="filled"
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => {
          successfalse();
          setAlert(false);
        }}
      >
        <Alert
          onClose={() => setAlert(false)}
          severity="error"
          elevation={6}
          variant="filled"
        >
          {errMess}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegiterUser;
