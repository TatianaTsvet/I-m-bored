import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, IconButton, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import "./modal-with-activity.css";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",

    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    flexWrap: "nowrap",
    // boxSizing: "content-box",
  },
  icon: {
    color: "#ff9800",
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ModalWithActivity() {
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();
  const classes = useStyles();

  const modalClose = () => {
    dispatch({ type: "openModal", payload: false });
  };
  const addToFavourite = (activity) => {
    dispatch({ type: "addToActivityList", payload: activity });
  };

  const modalOpen = useSelector((state) => state.serviceReducers.modal);
  const randomActivity = useSelector(
    (state) => state.mainReducers.randomActivity
  );
  const loading = useSelector((state) => state.serviceReducers.loading);

  let participants = [<PersonIcon key="personIcon" />];
  for (let i = 1; i < randomActivity.participants; i++) {
    participants.push(<PersonIcon key={`personIcon${i}`} />);
  }

  const body = (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
      className={classes.paper}
      style={modalStyle}
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
        <Tooltip title="Add to favourite" aria-label="add">
          <IconButton color="inherit" className={classes.icon}>
            <FavoriteIcon onClick={() => addToFavourite(randomActivity)} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        <IconButton color="inherit" className={classes.icon}>
          <CloseIcon onClick={modalClose} />
        </IconButton>
      </Grid>
    </Grid>
  );
  const modalBody = loading ? <Spinner /> : body;

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
}
