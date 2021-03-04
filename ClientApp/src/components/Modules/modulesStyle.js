import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  // toolbar: theme.mixins.toolbar,
  container: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: "#E9ECEF",
    minHeight: "100vh",
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "45%", // 16:9
    border: "1px solid black",
  },
}));
