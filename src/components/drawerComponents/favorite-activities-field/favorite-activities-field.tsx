import React, { FC } from "react";
import { Grid, Typography, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./favorite-activities-field.css";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { IFavoriteActivitiesProps } from "../../../interfaces/interfaces";

const FavoriteActivitiesField: FC<IFavoriteActivitiesProps> = ({
  activities,
  checked,
  drawerType,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favoriteActivities = useTypedSelector(
    (state) => state.mainReducers.activity
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
        ))}
    </div>
  );
};
export default FavoriteActivitiesField;
