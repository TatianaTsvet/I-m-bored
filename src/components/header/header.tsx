import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HistoryIcon from "@material-ui/icons/History";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import "./header.css";

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openFavoriteDrawer = () => {
    dispatch({ type: "openDrawer", payload: true });
    dispatch({ type: "drawerType", payload: "favorites" });
  };
  const openHistoryDrawer = () => {
    dispatch({ type: "drawerType", payload: "history" });
    dispatch({ type: "openDrawer", payload: true });
  };
  const sendSuggestion = () => {
    dispatch({ type: "openSuggestion", payload: true });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            I am bored...
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openFavoriteDrawer}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openHistoryDrawer}
          >
            <HistoryIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={sendSuggestion}
          >
            <MailOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
