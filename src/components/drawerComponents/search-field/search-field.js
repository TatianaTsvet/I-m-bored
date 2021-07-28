import React from "react";
import {
  Grid,
  IconButton,
  InputBase,
  TextField,
  InputLabel,
  MenuItem,
  InputAdornment,
  Input,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import useStyles from "./styles";
import "./search-field.css";



export default function SearchField() {
  const classes = useStyles();

  return (
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
          type="number"
          value="1" //min
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
  );
}
