import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import ModalSuggestActivity from "../../core/serviceComponents/modal-suggest-activity";
import CardsList from "../cards-list/cards-list";
import Spinner from "../../core/serviceComponents/spinner";
import SnackbarResult from "../../core/serviceComponents/snackbar-result";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import "./cards.css";

const Cards: FC = () => {
  const dispatch = useDispatch();
  const { loading, openSnackbar, suggestResponse } = useTypedSelector(
    (state) => state.serviceReducers
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

      <SnackbarResult
        snackbar={openSnackbar}
        suggestResponse={suggestResponse}
        snackbarClose={snackbarClose}
      />
    </Grid>
  );
};
export default Cards;
