import React from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";
import { Grid } from "@material-ui/core";

import "./app.css";

const App: React.FC = () => {
  return (
    <Grid container direction="column">
      <Header />
      <Cards />
      <ActivitiesDrawer />
    </Grid>
  );
}
export default App