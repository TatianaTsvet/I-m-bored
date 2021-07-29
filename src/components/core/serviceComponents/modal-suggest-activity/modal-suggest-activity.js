import React from "react";
import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  Typography,
  Modal,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import "./modal-suggest-activity.css";

const availableTypes = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busy work",
];
export default function BasicTextFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openModal = useSelector(
    (state) => state.serviceReducers.suggestionModal
  );
  const modalClose = () => {
    dispatch({ type: "openModal", payload: false });
  };
  const changeInput = (event) => {
    console.log(event.target.value);
  };
  const changeSelect = (event) => {
    console.log(event.target.value);
  };
  const changeParticipants = () => {};
  const types = availableTypes.map((item) => {
    return (
      <MenuItem value={item.replace(" ", "")} key={item}>
        {item}
      </MenuItem>
    );
  });
  return (
    <Modal
      open={openModal}
      onClose={modalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>
            Suggest a new activity to the Bored API team and see your activity
            in future displays!
          </Typography>
          <TextField id="standard-basic" onChange={changeInput} />

          <TextField
            className={classes.textField}
            id="outlined-basic"
            type="number"
            min={1}
            defaultValue={1}
            variant="outlined"
            onChange={changeParticipants}
            label="participants"
          />
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            className={classes.select}
            onChange={changeSelect}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            defaultValue=""
          >
            {types}
          </Select>
        </Grid>
      </form>
    </Modal>
  );
}
