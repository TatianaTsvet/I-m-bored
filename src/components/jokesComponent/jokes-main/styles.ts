import { mainColor, secondaryColor } from "../../../styles";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 500,  
    },
    fullList: {
       width: 'auto',    
    },
    iconDrawer: {
     color: secondaryColor,
      position: "absolute",
      right: "1em",      
    },
    grow: {
      // flexGrow: 1,
      

    },
    jokesBar: {
      backgroundColor: mainColor,
    },
    container: {
      backgroundColor:  mainColor,
     padding: '0.2em',
     width: '100%'
    }
  }),
);

export default useStyles;
