import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({    
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
