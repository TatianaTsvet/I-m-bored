import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
} from "@material-ui/core";
import itemData from "../../core/itemData";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import CardsList from "../cards-list/cards-list";
import Spinner from "../../core/serviceComponents/spinner";
import fetchNewActivity from "../../../service/asyncRequests";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import "./cards.css";

export default function Cards() {
  return (
    <>
      <CardsList />
      <ModalWithActivity />
      <Spinner />
    </>
  );
}
