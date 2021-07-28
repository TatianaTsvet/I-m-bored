import React from "react";
import IconsField from "../icons-field";
import SearchField from "../search-field";
import FavoriteActivitiesField from "../favorite-activities-field";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid, IconButton, Hidden, Drawer } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import "./drawer-favorites.css";

export default function DrawerFavorites() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useSelector(
    (state) => state.serviceReducers.favoriteDrawer
  );
  const drawerClose = () => {
    dispatch({ type: "openFavoriteDrawer", payload: false });
  };
  const drawer = (
    <div className={classes.drawer}>
      <IconButton
        variant="contained"
        onClick={drawerClose}
        className={classes.iconDrawer}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <IconsField />
      <SearchField />
      <FavoriteActivitiesField />
    </div>
  );
  return (
    <nav>
      {/* <Hidden> */}
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
      {/* </Hidden> */}
    </nav>
  );
}
