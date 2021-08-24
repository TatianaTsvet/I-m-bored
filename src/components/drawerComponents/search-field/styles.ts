import { makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import { ISearchProps } from "../../../interfaces/interfaces";
import { mainColor } from "../../../styles";

const useStyles = makeStyles<Theme, ISearchProps>((theme) =>
  createStyles({
    icon: {
      color: mainColor,
    },
    inputFields: {
      marginTop: '1em',
    },
    input: {
      color: mainColor,

      "&::before": {
        borderColor: mainColor,
      },
      "&::after": {
        borderColor: mainColor,
      },
    },

    participantsTextField: {
      color: mainColor,
      "&::before": {
        borderBottom: "2px solid #ff9800",
      },
      "&::after": {
        borderBottom: "2px solid #ff9800",
      },
    },
    checkbox: {
      color: mainColor,
      "&::checked": {
        color: "#b0bec5",
      },
    },
    formControl: {
      marginLeft: "0.5em",
    },
    iconField: {  
     
      [theme.breakpoints.down('xs')]: {
        display: (props) =>
        props.checked ? "block" : "none",      },
       
    },
    
  })
);
export default useStyles;
