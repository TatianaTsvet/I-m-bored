import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import FavoriteActivitiesField from "../favorite-activities-field";
import SearchField from "../search-field";

import { useSelector } from "react-redux";
import useStyles from "./styles";

import "./drawer-body.css";

export default function DrawerBody() {
  const classes = useStyles();
  const drawerName = useSelector((state) => state.serviceReducers.drawerType);
  const favoriteActivity = useSelector((state) => state.mainReducers.activity);
  const historyActivity = useSelector((state) => state.mainReducers.history);
  const allActivities =
    drawerName === "favorites" ? favoriteActivity : historyActivity;

  const [activities, setActivities] = useState(allActivities);
  const [value, setValue] = useState(1);
  const [checked, setChecked] = useState([]);
  const [filteredActivities, setfilteredActivities] = useState({});

  const switchType = (event) => {
    // if (event.target.checked) {
    //   const newActivitiesList = allActivities.filter(
    //     (item) => item.type !== event.target.value
    //   );
    //   setActivities(newActivitiesList);
    // } else {
    //   const returnActivities = allActivities.filter(
    //     (item) => item.type === event.target.value
    //   );
    //   const newList = [...activities, ...returnActivities];
    //   setActivities(newList);
    // }
    const currentIndex = checked.indexOf(event.target.value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(event.target.value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);
    setChecked(newChecked);

    const newActivitiesList = allActivities.filter((item) =>
      newChecked.map((i) => {
        return item.type !== i;
      })
    );
    console.log(newActivitiesList);
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
        {drawerName}
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