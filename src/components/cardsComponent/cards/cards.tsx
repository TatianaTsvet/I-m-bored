import React, { FC } from "react";
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
    <div>
      <div>
        <CardsList />
      </div>
      <ModalSuggestActivity />
      {loading ? <Spinner loading={loading} /> : <ModalWithActivity />}

      <SnackbarResult
        snackbar={openSnackbar}
        suggestResponse={suggestResponse}
        snackbarClose={snackbarClose}
      />
    </div>
  );
};
export default Cards;
