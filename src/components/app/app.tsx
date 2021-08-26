import React, { FC } from "react";
import Header from "../header";
import Cards from "../cardsComponent/cards";
import ActivitiesDrawer from "../drawerComponents/activities-drawer";

import "./app.css";

const App: FC = () => {
 
  return (
    <div className="container mx-auto p-1">
      <Header />
      <Cards />
      <ActivitiesDrawer />
    </div>
  );
};
export default App;
