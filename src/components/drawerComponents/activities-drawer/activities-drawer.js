import React from "react";
import DrawerBody from "../drawer-body";

import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { IconButton, Drawer } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import "./activities-drawer.css";

export default function ActivitiesDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state) => state.serviceReducers.drawer);
  const drawerClose = () => {
    dispatch({ type: "openDrawer", payload: false });
  };

  const drawer = (
    <div className={classes.drawer}>
      <IconButton
        variant="contained"
        onClick={drawerClose}
        className={classes.iconDrawer}
      >
        <CancelPresentationIcon />
      </IconButton>
      <DrawerBody />
    </div>
  );
  return (
    <nav>
      <Drawer
        anchor={"left"}
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
}
