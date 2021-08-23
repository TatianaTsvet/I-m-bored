import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";


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
      backgroundColor:  '#ff9800',
    },
   icon: {
    color:  '#ff9800',
   },
   title: {
    color:  '#ff9800',
   },
   
  }), 
);

export default useStyles;
