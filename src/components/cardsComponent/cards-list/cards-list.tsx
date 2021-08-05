import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton, 
  ListSubheader,
} from "@material-ui/core";
import itemData from "../../core/itemData";
import { fetchNewActivity } from "../../../service/asyncRequests";
import { useDispatch } from "react-redux";
 import useStyles from "./styles";
import "./cards-list.css";
// import { useActions } from "../../../hooks/useActions";

export default function CardsList() {
  // const {} = useActions
  const dispatch = useDispatch();
  const classes = useStyles();

  const modalOpen = (type: string) => {
    const newType = type.replace(" ", "");
    dispatch: (fetchNewActivity(newType));
    dispatch({ type: "switchLoading", payload: true });
    dispatch({ type: "openModal", payload: true });
  };

  return ( 
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Recreation Types</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img alt={item.title} src={`images/${item.src}`} />
            <ImageListItemBar
              title={item.title.toUpperCase()}
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
