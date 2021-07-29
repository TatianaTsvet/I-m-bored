import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./favorite-activities-field.css";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";

export default function FavoriteActivitiesField(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.mainReducers.activity);

  const deleteActivity = (key) => {
    dispatch({ type: "deleteFavoriteActivity", payload: key });
  };
  if (allActivities.length === 0) {
    return (
      <Typography variant="overline">
        You currently have no boring antidotes in favorites
      </Typography>
    );
  }
  const favoriteActivities = props.activities.map((item) => (
    <Grid
      key={item.key}
      className={classes.favoriteActivities}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={9}>
        <Typography variant="body1">{item.activity}</Typography>
      </Grid>
      <IconButton
        className={classes.icon}
        onClick={() => deleteActivity(item.key)}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  ));
  return <div className="favorite-activities">{favoriteActivities}</div>;
}
