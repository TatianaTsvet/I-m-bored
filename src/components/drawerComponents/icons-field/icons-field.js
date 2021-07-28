import React from "react";
import {
  Grid,
  Hidden,
  Drawer,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import itemData from "../../core/itemData";

import { useSelector } from "react-redux";
import useStyles from "./styles";
import "./icons-field.css";

export default function IconsField() {
  const classes = useStyles();

  const icons = (
    <Grid container direction="row">
      <p>Filters:</p>
      {itemData.map((item) => (
        <IconButton
          aria-label={`info about ${item.title}`}
          className={classes.icon}
        >
          {item.icon}
        </IconButton>
      ))}
    </Grid>
  );
  return (
    <>
      <Typography variant="h6" gutterBottom className={classes.drawerText}>
        Favorites
      </Typography>
      {icons}
    </>
  );
}
