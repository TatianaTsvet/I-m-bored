import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { secondaryColor } from "../../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      flexWrap: "nowrap",
      position: "absolute",
      top: "20%",
    },
    select: {
      background: secondaryColor,
    },
    menuItem: {
      textTransform: "capitalize",
    },
    textField: {
      margin: "1em 0",
    },
    selectForm: {
      margin: "1em 0",
    },
    suggestionButton: {
      marginLeft: "1em",
    },
  })
);
export default useStyles;
