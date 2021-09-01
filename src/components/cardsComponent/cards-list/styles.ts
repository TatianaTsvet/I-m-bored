import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    imageList: {
      width: "100%",
      height: "100%",
    },
    
    icon: {
      color: mainColor,
      background: "#ffe0b2",
      marginRight: '0.1em'
    },
  })
);

export default useStyles;
