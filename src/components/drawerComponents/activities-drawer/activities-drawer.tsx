import React, { FC, useReducer, useContext, useState } from "react";
import DrawerBody from "../drawer-body";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { IconButton, Drawer } from "@material-ui/core";
import {
  serviceReducers,
  serviceState,
  ContextApp,
} from "../../../store/reducers/serviceReducers";
import { ActionTypes } from "../../../store/actions/actionType";
import useStyles from "./styles";
import "./activities-drawer.css";
import { useEffect } from "react";

const ActivitiesDrawer: FC = () => {
  const classes = useStyles();
  const [serviState, serviceDispatch] = useReducer(
    serviceReducers,
    serviceState
  );
  const { state } = useContext(ContextApp);

  const drawerClose = () => {
    serviceDispatch({ type: ActionTypes.OPEN_DRAWER, payload: false });
  };

  const drawer = (
    <div className={classes.drawer}>
      <IconButton onClick={drawerClose} className={classes.iconDrawer}>
        <CancelPresentationIcon />
      </IconButton>
      <DrawerBody />
    </div>
  );

  return (
    <nav>
      <Drawer
        anchor={"left"}
        open={state.drawer}
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
export default ActivitiesDrawer;
