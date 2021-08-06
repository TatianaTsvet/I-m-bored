import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
  drawer: {
    background: "#37474f",
    height: "100%",
    color: "#ff9800",
  },
  drawerText: {
    textTransform: "uppercase",
  },
  icon: {
    color: "#ff9800",
  },
}));

export default useStyles;
