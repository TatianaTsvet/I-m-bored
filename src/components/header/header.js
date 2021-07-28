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
  const openDrawer = () => {
    dispatch({ type: "openFavoriteDrawer", payload: true });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            I'm bored...
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HistoryIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MailOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
