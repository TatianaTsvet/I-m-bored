import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
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
  checkbox: {
    color: "#ff9800",
    "&::checked": {
      color: "#b0bec5",
    },
  },
  formControl: {
    marginLeft: "0.5em",
  },
}));
export default useStyles;
