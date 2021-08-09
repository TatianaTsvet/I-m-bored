import React, { FC } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./favorite-activities-field.css";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

interface IFavoriteActivity {
  activity: string;
  type: string;
  key: number;
}
interface IFavoriteActivitiesProps {
  activities: IFavoriteActivity[];
  input: any;
  checked: any;
}

const FavoriteActivitiesField: FC<IFavoriteActivitiesProps> = ({
  activities,
  input,
  checked,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allActivities = useTypedSelector(
    (state) => state.mainReducers.activity
  );

  const deleteActivity = (key: number) => {
    dispatch({ type: "deleteFavoriteActivity", payload: key });
  };
  if (allActivities.length === 0) {
    return (
      <Typography variant="overline">
        You currently have no boring antidotes in favorites
      </Typography>
    );
  }

  // const favoriteActivities =
  // props.activities.map((item) => (
  //   <Grid
  //     key={item.key}
  //     className={classes.favoriteActivities}
  //     container
  //     direction="row"
  //     justifyContent="space-between"
  //     alignItems="center"
  //   >
  //     <Grid item xs={9}>
  //       <Typography variant="body1">{item.activity}</Typography>
  //     </Grid>
  //     <IconButton
  //       className={classes.icon}
  //       onClick={() => deleteActivity(item.key)}
  //     >
  //       <DeleteIcon />
  //     </IconButton>
  //   </Grid>
  // ));

  return (
    <div className="favorite-activities">
      {/* {favoriteActivities} */}
      {activities
        .filter(({ activity, type }) => {
          if (activity || type) {
            if (type) {
              return checked.includes(type);
            }
            if (activity) {
              return activity.toLowerCase().includes(input);
            }
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
            <IconButton
              className={classes.icon}
              onClick={() => deleteActivity(item.key)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        ))}
    </div>
  );
};
export default FavoriteActivitiesField;
