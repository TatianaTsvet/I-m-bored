import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    background: "#37474f",

    color: "#ff9800",
    padding: "1em",
  },
  drawerText: {
    textTransform: "uppercase",
  },
  icon: {
    color: "#ff9800",
  },
  iconDrawer: {
    color: "#ff9800",
    position: "absolute",
    right: "1em",
  },
});
export default useStyles;
