import React, { useState, useMemo, useCallback, useReducer } from "react";
import { Typography } from "@material-ui/core";
import ActivitiesField from "../activities-field";
import SearchField from "../search-field";
import { mainReducers, mainState } from "../../../store/reducers/mainReducers";
import {
  serviceReducers,
  serviceState,
} from "../../../store/reducers/serviceReducers";
import useStyles from "./styles";
import "./drawer-body.css";

export default function DrawerBody() {
  const [serveState, serveDispatch] = useReducer(serviceReducers, serviceState);
   const [headState, headDispatch] = useReducer(mainReducers, mainState);
  const classes = useStyles();
  const drawerType = serveState.drawerType;

  const favoriteActivity = headState.activity;
  const historyActivity = headState.history;

  const allActivities =
    drawerType === "favorites" ? favoriteActivity : historyActivity;
  // const drawerOpen = serveState.drawer);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

  // useEffect(() => {
  //   if (!drawerOpen) {
  //     setSearchQuery("");
  //     setCount(1);
  //     setCheckedFilters([]);
  //   }
  // }, [drawerOpen]);

  const activities = useMemo(() => {
    return allActivities.filter(
      (item) =>
        item.participants >= count &&
        item.activity.toLowerCase().includes(searchQuery)
    );
  }, [count, searchQuery, allActivities]);

  const switchType = (title: string, checked: boolean) => {
    const checkedFiltersSet = new Set(checkedFilters);
    if (checked) {
      checkedFiltersSet.add(title);
    } else {
      checkedFiltersSet.delete(title);
    }

    setCheckedFilters([...checkedFiltersSet]);
  };

  const changeQuery = useCallback((title: string) => {
    setSearchQuery(title);
  }, []);

  const changeCount = useCallback((count: number) => {
    setCount(count);
  }, []);

  return (
    <div className="drawer-body">
      <Typography variant="h6" gutterBottom className={classes.drawerText}>
        {drawerType}
      </Typography>

      <SearchField
        count={count}
        onCheckFilter={switchType}
        onCountChange={changeCount}
        onSearch={changeQuery}
      />
      <ActivitiesField
        drawerType={drawerType}
        activities={activities}
        input={searchQuery}
        checked={checkedFilters}
        count={count}
      />
    </div>
  );
}
