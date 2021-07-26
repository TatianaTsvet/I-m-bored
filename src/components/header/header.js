import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HistoryIcon from "@material-ui/icons/History";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "./header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#ff9800",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

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
