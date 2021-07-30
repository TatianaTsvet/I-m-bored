import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";


import useStyles from "./styles";
import "./snackbar-result.css";

export default function SnackbarResult(props) {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={props.snackbar}
      autoHideDuration={2000}
      onClose={props.snackbarClose}
      action={
        <MuiAlert variant="filled" severity="success">
          {props.suggestResponse.message}
        </MuiAlert>
      }
    />
  );
}
