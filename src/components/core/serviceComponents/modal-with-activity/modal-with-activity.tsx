import React, { FC } from "react";
import { Modal, Grid, IconButton, Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import "./modal-with-activity.css";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";

const ModalWithActivity: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const modalClose = () => {
    dispatch({ type: "openModal", payload: false });
  };
  const addToFavorite = (activity: any) => {
    dispatch({ type: "addToActivityList", payload: activity });
    dispatch({ type: "openModal", payload: false });
  };

  const modalOpen = useTypedSelector((state) => state.serviceReducers.modal);
  const randomActivity = useTypedSelector(
    (state) => state.mainReducers.randomActivity
  );

  const participants = [<PersonIcon key="personIcon" />];
  for (let i = 1; i < randomActivity.participants; i++) {
    participants.push(<PersonIcon key={`personIcon${i}`} />);
  }

  const body = (
    <Grid
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
        <h2 id="simple-modal-title">{randomActivity.activity}</h2>
        <p id="simple-modal-description">
          Participants
          <span className={classes.icon}>{participants}</span>
        </p>
        <Tooltip title="Add to favorite" aria-label="add">
          <IconButton
            color="inherit"
            className={classes.icon}
            onClick={() => addToFavorite(randomActivity)}
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
