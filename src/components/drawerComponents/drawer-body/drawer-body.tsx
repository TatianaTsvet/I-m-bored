import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import FavoriteActivitiesField from "../favorite-activities-field";
import SearchField from "../search-field";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import useStyles from "./styles";
import "./drawer-body.css";

export default function DrawerBody() {
  const classes = useStyles();
  const { drawerType } = useTypedSelector((state) => state.serviceReducers);
  const favoriteActivity = useTypedSelector(
    (state) => state.mainReducers.activity
  );
  const historyActivity = useTypedSelector(
    (state) => state.mainReducers.history
  );
  const allActivities =
    drawerType === "favorites" ? favoriteActivity : historyActivity;

  const [activities, setActivities] = useState(allActivities);
  const [input, setInput] = useState<string>("");
  const [value, setValue] = useState<number>(1);
  const [checked, setChecked] = useState<any[]>([]);

  const switchType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentIndex = checked.indexOf(event.target.value);
    //const newChecked = [...checked];

    // if (currentIndex === -1) {
    //   newChecked.push(event.target.value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }

    // setChecked(newChecked);

    // const res = allActivities.filter(({ type }) => !newChecked.includes(type));
    // setActivities(res);
    if (currentIndex === -1) {
      setChecked((checked) => [...checked, event.target.value]);
    } else {
      setChecked((checked) => checked.splice(currentIndex, 1));
    }
  };

  const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const foundItems = allActivities.filter(
    //   (item) => item.activity.indexOf(event.target.value) > -1
    // );
    // setActivities(foundItems);
    setInput(event.target.value.toLowerCase());
  };

  const countSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
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
      <FavoriteActivitiesField
        activities={activities}
        input={input}
        checked={checked}
      />
    </div>
  );
}
