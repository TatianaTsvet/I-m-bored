import React from "react";
import { CircularProgress, Grid, Modal } from "@material-ui/core";
import useStyles from "./styles";
import "./spinner.css";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";

export default function Spinner(props) {
  const classes = useStyles();
  const loading = useTypedSelector((state) => state.serviceReducers.loading);
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
          item
          xs={10}
          sm={9}
          md={6}
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
