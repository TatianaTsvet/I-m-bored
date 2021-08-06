import React from "react";
import DrawerBody from "../drawer-body";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { IconButton, Drawer } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import "./activities-drawer.css";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const ActivitiesDrawer : React.FC = () =>  {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useTypedSelector((state) => state.serviceReducers.drawer);
  const drawerClose = () => {
    dispatch({ type: "openDrawer", payload: false });
  };

  const drawer = (
    <div className={classes.drawer}>
      <IconButton
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
export default ActivitiesDrawer