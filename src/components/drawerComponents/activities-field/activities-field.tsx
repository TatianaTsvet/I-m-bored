import React, { FC, useReducer } from "react";
import { Grid, Typography, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { mainReducers, mainState } from "../../../store/reducers/mainReducers";
import { IFavoriteActivitiesProps } from "../../../interfaces/interfaces";
import { ActionTypes } from "../../../store/actions/actionType";
import "./activities-field.css";
import useStyles from "./styles";

const ActivitiesField: FC<IFavoriteActivitiesProps> = ({
  activities,
  checked,
  drawerType,
}) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(mainReducers, mainState);

  const favoriteActivities = state.activity;

  const deleteActivity = (key: number) => {
    dispatch({ type: ActionTypes.DELETE_FAVORITE_ACTIVITY, payload: key });
  };
  if (drawerType === "favorites" && favoriteActivities.length === 0) {
    return (
      <Typography variant="overline">
        You currently have no boring antidotes in favorites
      </Typography>
    );
  }

  const addToLiked = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const ActivityKey = Number(event.target.value);
    if (!checked) {
      dispatch({
        type: ActionTypes.DELETE_FAVORITE_ACTIVITY,
        payload: ActivityKey,
      });
    } else {
      dispatch({
        type: ActionTypes.CHANGE_LIKED,
        payload: ActivityKey,
      });
    }
  };

  return (
    <div className="favorite-activities">
      {activities
        .filter(({ type }) => {
          if (type) {
            return !checked.includes(type);
          }
          return true;
        })
        .map((item) => (
          <Grid
            container
            item
            key={item.key}
            className={classes.favoriteActivities}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={10}>
              <Typography variant="body1" className={classes.activityName}>
                {item.activity}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {drawerType === "favorites" ? (
                <IconButton
                  className={classes.icon}
                  onClick={() => deleteActivity(item.key)}
                >
                  <DeleteIcon />
                </IconButton>
              ) : (
                <Checkbox
                  checked={item.liked ? true : false}
                  icon={<FavoriteIcon />}
                  onChange={addToLiked}
                  checkedIcon={<FavoriteIcon />}
                  name="checkedH"
                  value={item.key}
                />
              )}
            </Grid>
          </Grid>
        ))}
    </div>
  );
};
export default ActivitiesField;
