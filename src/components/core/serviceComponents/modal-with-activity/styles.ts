import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      flexWrap: "nowrap",
      boxSizing: "content-box",
      position: "absolute",
      top: "25%",
    },
    icon: {
      color: mainColor,
    },
   
  })
);
export default useStyles;
