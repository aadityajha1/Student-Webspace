import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import useStyles from "./dashboardStyle";

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Box mt={5} />
      <Grid container justify="center" spacing={4}>
        <Grid item xs={6} sm={4} md={3}>
          <Paper elevation={2}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.cards}
            >
              <Grid item xs={6} alignContent="center" justify="center">
                <div
                  style={{
                    backgroundColor: "#ABDAF4",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <Avatar
                    src={"/icons/task-list.svg"}
                    className={classes.cardIcons}
                  />
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ color: "#848484", margin: 0, padding: 0 }}
                >
                  {" "}
                  Assignments
                </Typography>
                <br />
                <Typography variant="h5"> 6</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Paper elevation={2}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.cards}
            >
              <Grid item xs={6} alignContent="center" justify="center">
                <div
                  style={{
                    backgroundColor: "#EEA89F",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <Avatar
                    src={"/icons/calendar.svg"}
                    className={classes.cardIcons}
                  />
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ color: "#848484", margin: 0, padding: 0 }}
                >
                  Events
                </Typography>
                <br />
                <Typography variant="h5"> 3</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Paper elevation={2}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.cards}
            >
              <Grid item xs={6} alignContent="center" justify="center">
                <div
                  style={{
                    backgroundColor: "#9F821B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <Avatar
                    src={"/icons/percentage.svg"}
                    className={classes.cardIcons}
                  />
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ color: "#848484", margin: 0, padding: 0 }}
                >
                  Attendance
                </Typography>
                <br />
                <Typography variant="h5"> 95 %</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Paper elevation={2}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.cards}
            >
              <Grid item xs={6} alignContent="center" justify="center">
                <div
                  style={{
                    backgroundColor: "#95DEC4",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <Avatar
                    src={"/icons/bank.svg"}
                    className={classes.cardIcons}
                  />
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ color: "#848484", margin: 0, padding: 0 }}
                >
                  Due Fees
                </Typography>
                <br />
                <Typography variant="h5"> 95 %</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid container spacing={3} justify="center">
          <Box mt={7} />
          <Grid item>
            <Paper elevation={2} style={{ padding: "20px" }}>
              <Typography variant="h3" style={{ fontSize: "24px" }}>
                Today's Lectures
              </Typography>
              <Box mt={3} />
              <TableContainer component={Paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Module Name</TableCell>
                      <TableCell>Lecturer</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">Dummy Module</TableCell>
                      <TableCell align="left">Dummy Name</TableCell>
                      <TableCell align="left">Dummy Time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left"> Web Applications</TableCell>
                      <TableCell align="left">Dummy Name</TableCell>
                      <TableCell align="left">Dummy Time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left"> Web Applications</TableCell>
                      <TableCell align="left">Dummy Name</TableCell>
                      <TableCell align="left">Dummy Time</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box mt={3} justifySelf="right">
                <Button variant="contained" color="secondary">
                  Tommorow's Lectures
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
