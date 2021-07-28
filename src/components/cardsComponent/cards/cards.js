import React from "react";
import { Grid } from "@material-ui/core";
import ModalWithActivity from "../../core/serviceComponents/modal-with-activity/modal-with-activity";
import CardsList from "../cards-list/cards-list";
import Spinner from "../../core/serviceComponents/spinner";
import { useSelector } from "react-redux";
import "./cards.css";

export default function Cards() {
  const loading = useSelector((state) => state.serviceReducers.loading);

  return (
    <Grid>
      <Grid>
        <CardsList />
      </Grid>

      {loading ? <Spinner loading={loading} /> : <ModalWithActivity />}
      <Spinner />
    </Grid>
  );
}
