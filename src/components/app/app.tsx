import React, { FC, useReducer } from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";
import { Grid } from "@material-ui/core";
import {
  ContextApp,
  serviceState,
  serviceReducers,
} from "../../store/reducers/serviceReducers";
import useStyles from "./styles";
import "./app.css";

const App: FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(serviceReducers, serviceState);
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
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
          <ActivitiesDrawer />
        </Grid>
      </Grid>
    </ContextApp.Provider>
  );
};
export default App;
