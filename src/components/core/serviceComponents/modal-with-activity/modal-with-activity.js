import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import "./modal-with-activity.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: "absolute",
    // top: "25%",
    // right: "25%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    flexWrap: "nowrap",
    // boxSizing: 'content-box'
  },
  icon: {
    color: "#ff9800",
  },
}));

export default function ModalWithActivity() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.serviceReducers.modal);
  const randomActivity = useSelector(
    (state) => state.mainReducers.randomActivity
  );

  const classes = useStyles();

  const modalClose = () => {
    dispatch({ type: "openModal", payload: false });
  };
  let participants = "";
  for (let i = 1; (i = randomActivity.participants); i++) {
    participants += <PersonIcon />;
  }
  const body = (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
      className={classes.paper}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h2 id="simple-modal-title">{randomActivity.activity}</h2>
        <p id="simple-modal-description">
          Participants
          <span className={classes.icon}>{participants}</span>
        </p>
        <IconButton color="inherit" className={classes.icon}>
          <FavoriteIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton color="inherit" className={classes.icon}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
