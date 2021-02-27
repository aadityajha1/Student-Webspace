import { makeStyles } from "@material-ui/core/styles";
import {
  
  grey,
  
} from "@material-ui/core/colors";
const drawerWidth = 240;
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundColor: deepOrange[400],
  },
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    // justifyContent: "space-between",
    // transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    // backgroundColor: deepOrange[50],
    color: grey[900],
    zIndex: theme.zIndex.drawer + 1,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10%",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    backgroundColor: "#F1545E",
    color: "white",
    fontWeight: "bold"
    // backgroundColor: deepOrange[50],
  },
  drawerPaperMessages: {
    width: drawerWidth + 100,
    position: "absolute",
    
    // backgroundColor: deepOrange[50],
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  iconButton: {
    color: "white",
  },
  card: {
    width: drawerWidth + 100,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 0,
  },
  //   toolbar: {
  //     overflow: "auto",
  //   },
}));
