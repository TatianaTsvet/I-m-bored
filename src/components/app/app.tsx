import React, { FC } from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import "./app.css";

const App: FC = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      item
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      md={8}
      lg={7}
    >
      <Header />
      <Cards />
      <ActivitiesDrawer />
    </Grid>
  );
};
export default App;
