import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  Typography,
  Modal,
  Button,
  FormControl,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { sendActivityWithSuggestion } from "../../../../service/asyncRequests";
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
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(1);

  const openModal = useSelector(
    (state) => state.serviceReducers.suggestionModal
  );
  const modalClose = () => {
    dispatch({ type: "openSuggestion", payload: false });
  };
  const changeInput = (event) => {
    setActivity(event.target.value);
  };
  const changeSelect = (event) => {
    setType(event.target.value);
  };
  const changeParticipants = (event) => {
    setParticipants(event.target.value);
  };

  const sendSuggestion = () => {
    const data = { activity, type, participants };
    dispatch(sendActivityWithSuggestion(data));
    dispatch({ type: "openSuggestion", payload: false });
  };

  const types = availableTypes.map((item) => {
    return (
      <MenuItem value={item.replace(" ", "")} key={item}>
        {item.toUpperCase()}
      </MenuItem>
    );
  });
  const body = (
    <Grid item xs={10} sm={9} md={6} className={classes.paper}>
      <FormControl className={classes.formControl}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Typography>
            Suggest a new activity to the Bored API team and see your activity
            in future displays!
          </Typography>
          <InputLabel htmlFor="standard-basic"></InputLabel>
          <TextField
            className={classes.textActivity}
            required
            id="standard-basic"
            onChange={changeInput}
          />

          <TextField
            className={classes.textField}
            id="outlined-basic"
            type="number"
            min={1}
            variant="outlined"
            onChange={changeParticipants}
            label="participants"
          />

          <Select
            required
            className={classes.selectForm}
            onChange={changeSelect}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            defaultValue=""
          >
            {types}
          </Select>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button variant="contained" color="primary" onClick={modalClose}>
              Close
            </Button>
            <Button
              className={classes.suggestionButton}
              variant="contained"
              color="secondary"
              onClick={sendSuggestion}
              disabled={
                activity === "" || type === "" || participants <= 0
                  ? true
                  : false
              }
            >
              Send suggestion
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );

  return (
    <Modal
      open={openModal}
      onClose={modalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.modal}
      >
        {body}
      </Grid>
    </Modal>
  );
}