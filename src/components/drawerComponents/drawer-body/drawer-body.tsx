import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import FavoriteActivitiesField from "../favorite-activities-field";
import SearchField from "../search-field";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import useStyles from "./styles";
import "./drawer-body.css";

export default function DrawerBody() {
  const classes = useStyles();
  const {drawerType} = useTypedSelector((state) => state.serviceReducers);
  const favoriteActivity = useTypedSelector((state) => state.mainReducers.activity);
  const historyActivity = useTypedSelector((state) => state.mainReducers.history);
  const allActivities =
    drawerType === "favorites" ? favoriteActivity : historyActivity;

  const [activities, setActivities] = useState(allActivities);
  const [value, setValue] = useState(1);
  const [checked, setChecked] = useState([]);
  const [inputActivities, setfilteredInputActivities] = useState(activities);

  const switchType = (event) => {
    
    const currentIndex = checked.indexOf(event.target.value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(event.target.value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const res = allActivities.filter(({ type }) => !newChecked.includes(type));
    setActivities(res);
  };

  const inputSearch = (event) => {
    
    const foundItems = allActivities.filter(
      (item) => item.activity.indexOf(event.target.value) > -1
    );

    setActivities(foundItems);
  };

  const countSearch = (event) => {
    setValue(event.target.value);
    const participantsSearch = allActivities.filter(
      (item) => item.participants >= event.target.value
    );
    setActivities(participantsSearch);
  };

  return (
    <div className="drawer-body">
      <Typography variant="h6" gutterBottom className={classes.drawerText}>
        {drawerType}
      </Typography>

      <SearchField
        value={value}
        switchType={switchType}
        countSearch={countSearch}
        inputSearch={inputSearch}
      />
      <FavoriteActivitiesField activities={activities} />
    </div>
  );
}
