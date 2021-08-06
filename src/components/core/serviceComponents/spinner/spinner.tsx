import React from "react";
import { CircularProgress, Grid, Modal } from "@material-ui/core";
import useStyles from "./styles";
import "./spinner.css";


interface SpinerProps {
  loading: boolean
}

const Spinner: React.FC<SpinerProps> = (props) => {
  const classes = useStyles();
  
  return (
    <Modal
      open={props.loading}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      
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
export default Spinner