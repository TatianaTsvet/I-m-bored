import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { secondaryColor } from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    pageButton: {
      color: secondaryColor,
    },
    pageNumber: {
      color: secondaryColor,
      marginTop: '0.3em',
    }
  }), 
);

export default useStyles;
