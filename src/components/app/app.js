import React from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import DrawerFavorites from "../drawerComponents/drawer-favorites";
import { Grid } from "@material-ui/core";

import "./app.css";

export default function App() {
  return (
    <Grid container direction="column">
      <Header />
      <Cards />
      <DrawerFavorites />
    </Grid>
  );
}
