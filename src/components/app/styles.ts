import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
       paddingRight: '0.4.5em'
        // [theme.breakpoints.down('xs')]: {
         
        //   },
    },
  
  })
);

export default useStyles;
