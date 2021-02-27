import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

import React from "react";
import { FormProvider, useForm, Controller } from "react-hook-form";
import useStyles from "./registerUserStyle";

const RegiterUser = () => {
  const classes = useStyles();
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.toolbar} />
        <Box mt={5} />
        <Paper elevation={2} className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <img src={"cloud.png"} height="450" width="auto" />
            </Grid>
            <Grid item xs={12} sm={6} justify="center">
              <Typography variant="h5" gutterBottom align="center">
                Register New User
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
                    <Grid item xs={12} sm={8}>
                      <Controller
                        name="fullname"
                        control={methods.control}
                        as={
                          <TextField
                            autoFocus
                            fullWidth
                            variant="outlined"
                            label="Full Name"
                            placeholder="Enter Full Name"
                          />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Controller
                        name="username"
                        control={methods.control}
                        as={
                          <TextField
                            fullWidth
                            label="Username"
                            placeholder="Enter Username"
                            variant="outlined"
                          />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Controller
                        name="email"
                        control={methods.control}
                        as={
                          <TextField
                            fullWidth
                            label="Email"
                            placeholder="Enter Email"
                            variant="outlined"
                          />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Controller
                        name="password"
                        control={methods.control}
                        as={
                          <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter Password"
                            variant="outlined"
                          />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={4}>
                        <Grid item>
                          <Button variant="contained" color="primary">
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
    </div>
  );
};

export default RegiterUser;
