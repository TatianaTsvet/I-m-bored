import React, { useState, useMemo } from "react";
import ActivitiesField from "../activities-field";
import SearchField from "../search-field";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import "./drawer-body.css";
import { useCallback } from "react";

export default function DrawerBody() {
  const { drawerType } = useTypedSelector((state) => state.serviceReducers);
  const favoriteActivity = useTypedSelector(
    (state) => state.mainReducers.favorites
  );
  const historyActivity = useTypedSelector(
    (state) => state.mainReducers.history
  );
  const allActivities =
    drawerType === "favorites" ? favoriteActivity : historyActivity;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

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
    <div className="text-yellow-500 p-1">
      <p className="capitalize text-2xl pb-2">{drawerType}</p>

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
