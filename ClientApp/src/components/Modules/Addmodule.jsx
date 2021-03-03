import React from "react";
import useStyles from "./modulesStyle";
import {
  Box,
  Container,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useForm, Controller, FormProvider } from "react-hook-form";
// import { Button } from "bootstrap";

const AddModule = (props) => {
  const classes = useStyles();
  const methods = useForm();
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    const module = {
      name: data.name,
      intakeid: data.intakeid,
      courseid: data.courseid,
      semester: data.semester,
    };
    console.log(module);
    props.addmodule(module);
  };
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.toolbar} />
        <Paper className={classes.paper}>
          <Box my={3} />

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Typography variant="h5">Add Module Form</Typography>
              <Box mb={3} />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={methods.control}
                    as={
                      <TextField
                        label="Name"
                        placeholder="Enter Module Name"
                        variant="outlined"
                        fullWidth
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <label htmlFor="semester">Select Semester</label>
                  <Controller
                    name="semester"
                    control={methods.control}
                    as={
                      <Select fullWidth id="semester">
                        <MenuItem value="First">First</MenuItem>
                        <MenuItem value="Second">Second</MenuItem>
                        <MenuItem value="Third">Third</MenuItem>
                        <MenuItem value="Fourth">Fourth</MenuItem>
                        <MenuItem value="Fifth">Fifth</MenuItem>
                        <MenuItem value="Sixth">Sixth</MenuItem>
                      </Select>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="intakeid">Select Intake code</label>
                  <Controller
                    name="intakeid"
                    control={methods.control}
                    as={
                      <Select fullWidth id="intakeid">
                        {props.intake.map((intke) => (
                          <MenuItem key={intke.id} value={intke.id}>
                            {intke.name}
                          </MenuItem>
                        ))}
                      </Select>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="courseid">Select Course</label>
                  <Controller
                    name="courseid"
                    control={methods.control}
                    as={
                      <Select fullWidth id="courseid">
                        {props.courses.map((course) => (
                          <MenuItem key={course.id} value={course.id}>
                            {course.name}
                          </MenuItem>
                        ))}
                      </Select>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    //   onClick={(e) => e.preventDefault()}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Box mb={4} />
            </form>
          </FormProvider>
        </Paper>
      </Container>
    </div>
  );
};

export default AddModule;
