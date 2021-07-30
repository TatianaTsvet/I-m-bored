import React from "react";
import { Grid } from "@material-ui/core";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import ModalSuggestActivity from "../../core/serviceComponents/modal-suggest-activity";
import CardsList from "../cards-list/cards-list";
import Spinner from "../../core/serviceComponents/spinner";
import SnackbarResult from "../../core/serviceComponents/snackbar-result";
import { useDispatch, useSelector } from "react-redux";
import "./cards.css";

export default function Cards() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.serviceReducers.loading);
  const snackbar = useSelector((state) => state.serviceReducers.openSnackbar);
  const suggestResponse = useSelector(
    (state) => state.serviceReducers.suggestResponse
  );
  const snackbarClose = () => {
    dispatch({ type: "openSnackbar", payload: false });
  };
  return (
    <Grid>
      <Grid>
        <CardsList />
      </Grid>
      <ModalSuggestActivity />
      {loading ? <Spinner loading={loading} /> : <ModalWithActivity />}
      <Spinner />
      <SnackbarResult
        snackbar={snackbar}
        suggestResponse={suggestResponse}
        snackbarClose={snackbarClose}
      />
    </Grid>
  );
}
