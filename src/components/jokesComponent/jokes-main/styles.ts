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
     color: "#fff",
      position: "absolute",
      right: "1em",      
    },
    grow: {
      flexGrow: 1,
    },
    jokesBar: {
      backgroundColor: "#ff9800",
    },
    container: {
      backgroundColor:  '#ff9800',
     padding: '0.2em',
    }
  }),
);

export default useStyles;
