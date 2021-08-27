import React, { FC, useCallback, useState } from "react";
import {
  Grid,
  InputAdornment,
  Input,
  Switch,
  Hidden,
  FormControlLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Filter from "../filter";
import itemData from "../../core/itemData";
import useStyles from "./styles";
import "./search-field.css";
import { ISearchFieldProps } from "../../../interfaces/interfaces";

const SearchField: FC<ISearchFieldProps> = (props) => {
  const { onCheckFilter, onSearch, onCountChange, count } = props;
  const [checked, setChecked] = useState(false);
  const classes = useStyles({ checked });
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
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

  const icons = (
    <div>
      <p className="text-lg pb-2 pl-1">Filters:</p>
      {itemData.map(({ title, icon }) => (
        <Filter
          key={title}
          title={title}
          icon={icon}
          switchType={onCheckFilter}
        />
      ))}
    </div>
  );

  return (
    <div className="search-field">
      <Hidden smUp>
        <FormControlLabel
          control={
            <Switch
              inputProps={{ "aria-label": "primary checkbox" }}
              checked={checked}
              onChange={handleChange}
            />
          }
          label={checked ? "Hide filters" : "Show filters"}
        />
      </Hidden>
      {icons}

      <Grid
        item
        xs={11}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        className={classes.inputFields}
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
