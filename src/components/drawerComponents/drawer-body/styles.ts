import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      background: "#37474f",
      height: "100%",
      color: mainColor,
      
    },
    drawerText: {
      textTransform: "uppercase",
    },
    icon: {
      color: mainColor,
    },
    input: {
      color: mainColor,

      "&::before": {
        borderColor:mainColor,
      },
      "&::after": {
        borderColor: mainColor,
      },
    },

    participantsTextField: {
      color: mainColor,
      "&::before": {
        borderBottom: "2px solid #ff9800",
      },
      "&::after": {
        borderBottom: "2px solid #ff9800",
      },
    },
    checkbox: {
      color: mainColor,
      "&::checked": {
        color: "#b0bec5",
      },
    },
    formControl: {
      marginLeft: "0.5em",
    },
  })
);

export default useStyles;
