import React from "react";
import { CircularProgress, Grid, Modal } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import "./spinner.css";

export default function Spinner(props) {
  const classes = useStyles();
  const loading = useSelector((state) => state.serviceReducers.loading);
  return (
    <Modal
      open={loading}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.spinner}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.spinnerBackground}
        >
          <CircularProgress className={classes.progress} />
        </Grid>
      </Grid>
    </Modal>
  );
}
