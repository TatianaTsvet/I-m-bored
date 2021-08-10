import React, { FC, useCallback } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Filter from "../filter";
import itemData from "../../core/itemData";
import useStyles from "./styles";
import "./search-field.css";

interface SearchFieldProps {
  onCheckFilter: (title: string, checked: boolean) => void;
  onSearch: (value: string) => void;
  onCountChange: (count: number) => void;
  count: number;
}

const SearchField: FC<SearchFieldProps> = (props) => {
  const classes = useStyles();
  const { onCheckFilter, onSearch, onCountChange, count } = props;

  const icons = (
    <Grid container direction="row">
      <p>Filters:</p>
      {itemData.map(({ title, icon }) => (
        <Filter
          key={title}
          title={title}
          icon={icon}
          switchType={onCheckFilter}
        />
      ))}
    </Grid>
  );

  const handleSearchInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch]
  );

  const handleCountInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value >= "1") {
        onCountChange(Number(event.target.value));
      } else {
        onCountChange(1);
      }
    },
    [onCountChange]
  );

  return (
    <div className="search-field">
      {icons}
      <Grid
        item
        xs={11}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <Input
            onChange={handleSearchInput}
            className={classes.input}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            onChange={handleCountInput}
            type="number"
            value={count}
            className={classes.input}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment
                position="start"
                className={classes.participantsTextField}
              >
                <PersonIcon />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchField;
