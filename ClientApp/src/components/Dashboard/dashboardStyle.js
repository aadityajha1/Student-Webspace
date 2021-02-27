import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: "#E9ECEF",
    minHeight: "100vh",
  },
  cards: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bolder",
    padding: "10px 20px",
  },
  cardIcons: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: "inline",
  },
  table: {
    minWidth: 640,
  },
}));
