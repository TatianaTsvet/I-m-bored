import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spinner: {
    background: "#fff",
    width: 200,
    height: 200,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  progress: {
    color: "#ff9800",
  },
}));

export default useStyles;
