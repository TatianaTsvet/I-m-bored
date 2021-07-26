import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
} from "@material-ui/core";
import itemData from "../../core/itemData";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import { useDispatch } from "react-redux";
import "./cards-list.css";
import AsyncRequest from "../../../service/asyncRequests";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "#ff9800",
    background: "#ffe0b2",
  },
}));

export default function CardList() {
  const acyncRequest = new AsyncRequest();

  const dispatch = useDispatch();
  const classes = useStyles();

  const modalOpen = async (type) => {
    const newType = type.toLowerCase();
    const getNewActivity = await acyncRequest.getActivity(newType);

    dispatch({ type: "openModal", payload: true });
    dispatch({ type: "getActivity", payload: getNewActivity });
  };
  return (
    <div className={classes.root}>
      <ModalWithActivity />
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Recreation Types</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img alt={item.href} src={`images/${item.src}`} />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  color="inherit"
                  className={classes.icon}
                  onClick={() => modalOpen(item.title)}
                >
                  {item.icon}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
