import React, { FC, useReducer } from "react";
import { Grid } from "@material-ui/core";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import ModalSuggestActivity from "../../core/serviceComponents/modal-suggest-activity";
import CardsList from "../cards-list/cards-list";
import Spinner from "../../core/serviceComponents/spinner";
import SnackbarResult from "../../core/serviceComponents/snackbar-result";
import { ActionTypes } from "../../../store/actions/actionType";
import {
  serviceReducers,
  serviceState,
} from "../../../store/reducers/serviceReducers";
import useStyles from "./styles";
import "./cards.css";

const Cards: FC = () => {
  const [state, dispatch] = useReducer(serviceReducers, serviceState);
  const classes = useStyles();

  const { loading, openSnackbar, suggestResponse } = state;

  const snackbarClose = () => {
    dispatch({ type: ActionTypes.OPEN_SNACKBAR, payload: false });
  };

  return (
    <Grid container className={classes.container}>
      <Grid>
        <CardsList />
      </Grid>
      <ModalSuggestActivity />
      {loading ? <Spinner loading={loading} /> : <ModalWithActivity />}

      <SnackbarResult
        snackbar={openSnackbar}
        suggestResponse={suggestResponse}
        snackbarClose={snackbarClose}
      />
    </Grid>
  );
};
export default Cards;
