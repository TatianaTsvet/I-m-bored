import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

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
      background: "#ff9800",
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
export default useStyles;
