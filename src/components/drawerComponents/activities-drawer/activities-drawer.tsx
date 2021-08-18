import React, { FC, useEffect, useReducer } from "react";
import DrawerBody from "../drawer-body";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { IconButton, Drawer } from "@material-ui/core";
import {
  serviceReducers,
  serviceState,
} from "../../../store/reducers/serviceReducers";
import { ActionTypes } from "../../../store/actions/actionType";
import useStyles from "./styles";
import "./activities-drawer.css";

const ActivitiesDrawer: FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(serviceReducers, serviceState);

  const drawerClose = () => {
    dispatch({ type: ActionTypes.OPEN_DRAWER, payload: false });
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
