import React, { FC } from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";
import JokesMain from "../jokesComponent/jokes-main";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import "./app.css";

const App: FC = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        className={classes.container}
        container
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        md={12}
      >
        <Header />
        <Cards />
        <JokesMain />
        <ActivitiesDrawer />
      </Grid>
    </Grid>
  );
};
export default App;
