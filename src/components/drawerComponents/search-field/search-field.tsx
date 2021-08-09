import React, { FC } from "react";
import { Grid, InputAdornment, Input, Checkbox } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import itemData from "../../core/itemData";
import useStyles from "./styles";
import "./search-field.css";

interface SearchFieldProps {
  switchType: (event: React.MouseEvent<HTMLButtonElement>) => void;
  countSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const SearchField: FC<SearchFieldProps> = (props) => {
  const classes = useStyles();

  const icons = (
    <Grid container direction="row">
      <p>Filters:</p>
      {itemData.map((item, index) => (
        <Checkbox
          key={item.img}
          className={classes.checkbox}
          icon={item.icon}
          onClick={props.switchType}
          checkedIcon={item.icon}
          name="checkedH"
          value={item.title}
          color="primary"
        />
      ))}
    </Grid>
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
            onChange={props.inputSearch}
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
            onChange={props.countSearch}
            type="number"
            value={props.value}
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
