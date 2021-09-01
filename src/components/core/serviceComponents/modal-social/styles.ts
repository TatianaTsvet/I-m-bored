import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { mainColor } from "../../../../styles";

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
    shareTitle: {     
      color: mainColor
    },
    shareJoke: {
      margin: '1em 0 1em',
      [theme.breakpoints.down('xs')]: {
        margin: 0,
      },
    }
  })
);
export default useStyles;
