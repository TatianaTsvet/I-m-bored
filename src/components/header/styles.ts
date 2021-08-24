import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { mainColor } from "../../styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "sticky",
      width: "100%",
      zIndex: 1300,
      top: "0",
     
     
    },
    appBar: {
      background: mainColor,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
     
    },
    iconHover: {
      background: 'red',
    },
    title: {
      flexGrow: 1,
    },
  })
);
export default useStyles;
