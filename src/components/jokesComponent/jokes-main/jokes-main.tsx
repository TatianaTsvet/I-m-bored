import React, { FC } from "react";
import JokesPaper from "../jokes-paper";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import {
  Grid,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import useStyles from "./styles";
import "./jokes-main.css";

const JokesMain: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useTypedSelector(
    (state) => state.serviceReducers.bottomDrawer
  );
  const drawerClose = () => {
    dispatch({ type: "bottomDrawerOpen", payload: false });
  };

  const drawer = (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: "bottom",
      })}
    >
      <div className={classes.grow}>
        <AppBar position="static" className={classes.jokesBar}>
          <Toolbar>
            <Typography variant="h5" noWrap>
              Jokester
            </Typography>
            <IconButton onClick={drawerClose} className={classes.iconDrawer}>
              <CancelPresentationIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Grid
        className={classes.container}
        xs={12}
        container
        item
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <JokesPaper />
      </Grid>
    </div>
  );

  return (
    <nav>
      <Drawer
        anchor={"bottom"}
        open={drawerOpen}
        onClose={drawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};
export default JokesMain;
