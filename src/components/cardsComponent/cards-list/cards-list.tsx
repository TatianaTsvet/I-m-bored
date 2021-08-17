import React, { FC } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
  useMediaQuery,
} from "@material-ui/core";
import itemData from "../../core/itemData";
import { Grid } from "@material-ui/core";
import { fetchNewActivity } from "../../../service/asyncRequests";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import "./cards-list.css";

const CardsList: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const modalOpen = (type: string) => {
    const newType = type.replace(" ", "");
    dispatch(fetchNewActivity(newType));
    dispatch({ type: "switchLoading", payload: true });
    dispatch({ type: "openModal", payload: true });
  };
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ImageList rowHeight={180}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Recreation Types</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={matches ? 2 : 1}>
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
    </Grid>
  );
};

export default CardsList;
