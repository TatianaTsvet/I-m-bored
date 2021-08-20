import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    iconDrawer: {
      color: "#ff9800",
      position: "absolute",
      right: "1em",      
    },
  })
);

export default useStyles;
