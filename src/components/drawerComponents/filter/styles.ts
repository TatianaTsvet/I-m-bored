import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    checkbox: {
      color: "#ff9800",
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
