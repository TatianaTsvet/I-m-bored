import { makeStyles, Theme, createStyles} from "@material-ui/core/styles";

interface Props {
  checked: boolean;
}

const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    icon: {
      color: "#ff9800",
    },
    inputFields: {
      marginTop: '1em',
    },
    input: {
      color: "#ff9800",

      "&::before": {
        borderColor: "#ff9800",
      },
      "&::after": {
        borderColor: "#ff9800",
      },
    },

    participantsTextField: {
      color: "#ff9800",
      "&::before": {
        borderBottom: "2px solid #ff9800",
      },
      "&::after": {
        borderBottom: "2px solid #ff9800",
      },
    },
    checkbox: {
      color: "#ff9800",
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
