import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  
  progress: {
    color: "#ff9800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerBackground: {
    background: "#fff",
    width: 300,
    height: 150,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    position: "absolute",
    top: "30%",
  },
}));

export default useStyles;
