import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: mainColor,
    },
    favoriteActivities: {
      marginTop: "0.2em",     
    },
    activityName: {
      marginTop: '0.6em'
    }
  })
);
export default useStyles;
