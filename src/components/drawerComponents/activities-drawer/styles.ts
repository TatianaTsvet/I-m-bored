import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
     background: "#37474f",
      color: mainColor,
      padding: "1em",
    },
    drawerText: {
      textTransform: "uppercase",
    },
    icon: {
      color:mainColor,
    },
    iconDrawer: {
      color: mainColor,
      position: "absolute",
      right: "1em",
      
    },
  })
);

export default useStyles;
