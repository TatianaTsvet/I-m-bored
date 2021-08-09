import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./styles";
import "./snackbar-result.css";

interface SnackbarProps {
  suggestResponse: any;
  snackbar: boolean;
  snackbarClose: () => void;
}

const SnackbarResult = ({
  snackbar,
  snackbarClose,
  suggestResponse,
}: SnackbarProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={snackbar}
      autoHideDuration={2000}
      onClose={snackbarClose}
      action={
        <MuiAlert variant="filled" severity="success">
          {suggestResponse.message}
        </MuiAlert>
      }
    />
  );
};

export default SnackbarResult;
