import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#ff9800",
  },

  input: {
    color: "#ff9800",

    "&::before": {
      borderColor: "#ff9800",
    },
    "&::after": {
      borderColor: "#ff9800",
    },
  },

  participantsTextField: {
    color: "#ff9800",
    "&::before": {
      borderBottom: "2px solid #ff9800",
    },
    "&::after": {
      borderBottom: "2px solid #ff9800",
    },
  },
}));
export default useStyles;
