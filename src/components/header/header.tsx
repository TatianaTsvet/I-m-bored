import React, { FC, useReducer } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Tooltip,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HistoryIcon from "@material-ui/icons/History";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  serviceReducers,
  serviceState,
} from "../../store/reducers/serviceReducers";
import { ActionTypes } from "../../store/actions/actionType";
import useStyles from "./styles";
import "./header.css";

const Header: FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(serviceReducers, serviceState);

  const openFavoriteDrawer = () => {
    dispatch({ type: ActionTypes.OPEN_DRAWER, payload: true });
    dispatch({ type: ActionTypes.DRAWER_TYPE, payload: "favorites" });
  };
  const openHistoryDrawer = () => {
    dispatch({ type: ActionTypes.DRAWER_TYPE, payload: "history" });
    dispatch({ type: ActionTypes.OPEN_DRAWER, payload: true });
  };
  const sendSuggestion = () => {
    dispatch({ type: ActionTypes.OPEN_SUGGESTION, payload: true });
  };

  return (
    <Grid className={classes.root} container>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            I am bored...
          </Typography>
          <Tooltip
            title="Favorite"
            arrow
            leaveTouchDelay={2000}
            enterTouchDelay={50}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={openFavoriteDrawer}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="History"
            arrow
            leaveTouchDelay={2000}
            enterTouchDelay={50}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={openHistoryDrawer}
            >
              <HistoryIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Suggest new activity"
            arrow
            leaveTouchDelay={2000}
            enterTouchDelay={50}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={sendSuggestion}
            >
              <MailOutlineIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
