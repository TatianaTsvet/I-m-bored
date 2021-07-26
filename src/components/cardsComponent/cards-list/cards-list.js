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
import "./cards-list.css";

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
  const classes = useStyles();
  const modalOpen = () => {
    this.props.setOpen(true);
  };
  return (
    <div className={classes.root}>
   
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Recreation Types</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img alt={item.href} src={`images/${item.src}`} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.subtitle}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  color="inherit"
                  className={classes.icon}
                  onClick={modalOpen}
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
