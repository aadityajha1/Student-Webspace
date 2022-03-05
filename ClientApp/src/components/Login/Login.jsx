import React from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  Container,
  CssBaseline,
  Avatar,
  Checkbox,
  Box,
  FormControlLabel,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useForm, FormProvider, Controller } from "react-hook-form";
import useStyles from "./loginStyle";
import { LockOutlined } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/" style={{ color: "inherit" }}>
        Nepal University
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = ({ login, isLoading, success, errMess }) => {
  const classes = useStyles();
  const methods = useForm();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const onSubmit = (data) => {
    if (data.username !== "" && data.password !== "") {
      console.log(data);
      login(data.username, data.password);
    } else {
      setOpen(true);
    }
  };
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!success && errMess) {
      setError(true);
    }
  }, [errMess, success]);
  useEffect(() => {
    if (!isLoading && success) {
      history.push("/user/dashboard");
    }
  }, [isLoading, success]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.toolbar} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormProvider {...methods}>
          <form
            className={classes.form}
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
          >
            <Controller
              name="username"
              control={methods.control}
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  autoComplete="username"
                  // onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              }
            />
            <Controller
              name="password"
              control={methods.control}
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  // onChange={(e) => setRememberMe(!rememberMe)}
                />
              }
              label="Remember me"
            />
            {isLoading ? (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled
              >
                <CircularProgress />
                Sign In
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={handleLogin}
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
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
          severity="error"
          elevation={6}
          variant="filled"
        >
          PLease fill all details
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => {
          // successfalse();
          setError(false);
        }}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          elevation={6}
          variant="filled"
        >
          {errMess}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
