import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { mainColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     height: '100%',
     margin: '0.2em',     
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor:  mainColor,
    },
   icon: {
    color:  mainColor,
   },
   title: {
    color:  mainColor,
   },
   
  }), 
);

export default useStyles;
