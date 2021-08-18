import React, { FC, useReducer } from "react";
import { Modal, Grid, IconButton, Tooltip } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import { IActivity } from "../../../../interfaces/interfaces";
import {
  serviceReducers,
  serviceState,
} from "../../../../store/reducers/serviceReducers";
import {
  mainReducers,
  mainState,
} from "../../../../store/reducers/mainReducers";
import { ActionTypes } from "../../../../store/actions/actionType";
import useStyles from "./styles";
import "./modal-with-activity.css";

const ModalWithActivity: FC = () => {
  const classes = useStyles();
  const [serveState, serveDispatch] = useReducer(serviceReducers, serviceState);
  const [headState, headDispatch] = useReducer(mainReducers, mainState);

  const modalClose = () => {
    serveDispatch({ type: ActionTypes.OPEN_MODAL, payload: false });
  };
  const addToFavorite = (activity: IActivity) => {
    headDispatch({ type: ActionTypes.ADD_TO_ACTIVITY_LIST, payload: activity });
    serveDispatch({ type: ActionTypes.OPEN_MODAL, payload: false });
  };

  const modalOpen = serveState.modal;
  const randomActivity = headState.randomActivity;

  const participants = [<PersonIcon key="personIcon" />];
  randomActivity.map((item) => {
    for (let i = 1; i < item.participants; i++) {
      participants.push(<PersonIcon key={`personIcon${i}`} />);
    }
    return participants;
  });

  const body = randomActivity.map((item) => {
    return (
      <Grid
        key={item.key}
        item
        xs={8}
        sm={9}
        md={6}
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
          <h2 id="simple-modal-title">{item.activity}</h2>
          <p id="simple-modal-description">
            Participants
            <span className={classes.icon}>{participants}</span>
          </p>
          <Tooltip title="Add to favorite" aria-label="add">
            <IconButton
              color="inherit"
              className={classes.icon}
              onClick={() => addToFavorite(item)}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid>
          <IconButton
            color="inherit"
            className={classes.icon}
            onClick={modalClose}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  });

  return (
    <Modal
      open={modalOpen}
      onClose={modalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.modal}
      >
        {body}
      </Grid>
    </Modal>
  );
};

export default ModalWithActivity;
