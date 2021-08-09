import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: "#ff9800",
    },
    favoriteActivities: {
      marginTop: "0.6em",
    },
  })
);
export default useStyles;
