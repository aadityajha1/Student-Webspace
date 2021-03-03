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
} from "@material-ui/core";

import React from "react";
import { FormProvider, useForm, Controller } from "react-hook-form";
import useStyles from "./registerUserStyle";

const RegiterUser = ({ registerStudent, intake }) => {
  const classes = useStyles();
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerStudent(
      data.username,
      data.password,
      data.email,
      data.user_role,
      data.intakeid,
      data.fullname,
      data.gender
    );
  };
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
                    <Grid item xs={12} sm={7}>
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
                    <Grid item xs={12} sm={7}>
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
                    <Grid item xs={12} sm={7}>
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
                    <Grid item xs={12} sm={7}>
                      <InputLabel htmlFor="user_role">
                        Select User Role
                      </InputLabel>
                      <Controller
                        name="user_role"
                        control={methods.control}
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
    </div>
  );
};

export default RegiterUser;
