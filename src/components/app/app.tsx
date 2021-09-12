import React, { FC } from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";
import JokesMain from "../jokesComponent/jokes-main";

import "./app.css";

const App: FC = () => {
  return (
    <div className=" mx-auto p-1">
      <Header />
      <Cards />
      <ActivitiesDrawer />
      <JokesMain />
    </div>
  );
};
export default App;
