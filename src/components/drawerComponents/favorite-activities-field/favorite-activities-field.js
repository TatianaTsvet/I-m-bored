import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./favorite-activities-field.css";
import { useSelector } from "react-redux";
import useStyles from "./styles";

export default function FavoriteActivitiesField() {
  const classes = useStyles();
  const allActivities = useSelector((state) => state.mainReducers.activity);

  if (allActivities.length === 0) {
    return (
      <Typography variant="overline">
        You currently have no boring antidotes in favorites
      </Typography>
    );
  }
  const favoriteActivities = allActivities.map((item) => (
    <Grid
      className={classes.favoriteActivities}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={9}>
        <Typography variant="body1">{item.activity}</Typography>
      </Grid>
      <IconButton className={classes.icon}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  ));
  return <div className="favorite-activities">{favoriteActivities}</div>;
}
