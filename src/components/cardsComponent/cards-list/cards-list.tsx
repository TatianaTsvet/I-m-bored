import React, { FC, useReducer } from "react";
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
import { ActionTypes } from "../../../store/actions/actionType";
import useStyles from "./styles";
import {
  serviceReducers,
  serviceState,
} from "../../../store/reducers/serviceReducers";
import { mainReducers, mainState } from "../../../store/reducers/mainReducers";
import "./cards-list.css";

const CardsList: FC = () => {
  const [, serveDispatch] = useReducer(serviceReducers, serviceState);
  const [, headDispatch] = useReducer(mainReducers, mainState);
  const classes = useStyles();

  const modalOpen = async (type: string): Promise<void> => {
    const newType = type.replace(" ", "");

    const newData = await fetchNewActivity(newType);
    headDispatch({ type: ActionTypes.GET_ACTIVITY, payload: newData });
    serveDispatch({ type: ActionTypes.SWITCH_LOADING, payload: true });
    serveDispatch({ type: ActionTypes.OPEN_MODAL, payload: true });
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
