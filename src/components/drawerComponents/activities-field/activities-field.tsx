import React, { FC } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Checkbox,
  Tooltip,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./activities-field.css";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { IFavoriteActivitiesProps } from "../../../interfaces/interfaces";

const ActivitiesField: FC<IFavoriteActivitiesProps> = ({
  activities,
  checked,
  drawerType,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favoriteActivities = useTypedSelector(
    (state) => state.mainReducers.favorites
  );

  const deleteActivity = (key: number) => {
    dispatch({ type: "deleteFavoriteActivity", payload: key });
  };
  if (drawerType === "favorites" && favoriteActivities.length === 0) {
    return (
      <Typography variant="overline">
        You currently have no boring antidotes in favorites
      </Typography>
    );
  }
  const reallyDeleteActivity = (key: number) => {
    dispatch({ type: "reallyDeleteActivity", payload: key });
  };
  const addToLiked = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      dispatch({
        type: "deleteFavoriteActivity",
        payload: event.target.value,
      });
    } else {
      dispatch({
        type: "changeLiked",
        payload: event.target.value,
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
            <Grid item xs={8} md={9}>
              <Typography variant="body1" className={classes.activityName}>
                {item.activity}
              </Typography>
            </Grid>
            <Grid item>
              {drawerType === "favorites" ? (
                <Tooltip title="Add to history">
                  <IconButton
                    className={classes.icon}
                    onClick={() => deleteActivity(item.key)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Grid>
                  <Tooltip title="Return to favorites">
                    <Checkbox
                      checked={item.liked ? true : false}
                      icon={<FavoriteIcon />}
                      onChange={addToLiked}
                      checkedIcon={<FavoriteIcon />}
                      name="checkedH"
                      value={item.key}
                    />
                  </Tooltip>
                  <Tooltip title="Delete at all">
                    <IconButton
                      className={classes.icon}
                      onClick={() => reallyDeleteActivity(item.key)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
            </Grid>
          </Grid>
        ))}
    </div>
  );
};
export default ActivitiesField;
