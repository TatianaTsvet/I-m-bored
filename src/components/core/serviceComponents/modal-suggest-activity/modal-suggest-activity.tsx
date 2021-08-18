import React, { useState, FC, useEffect, useReducer } from "react";
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
import {
  serviceReducers,
  serviceState,
} from "../../../../store/reducers/serviceReducers";
import { ActionTypes } from "../../../../store/actions/actionType";
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
const ModalSuggestActivity: FC = () => {
  const classes = useStyles();
  const [serveState, serveDispatch] = useReducer(serviceReducers, serviceState);
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(1);

  const openModal = serveState.suggestionModal;

  useEffect(() => {
    if (!openModal) {
      setParticipants(1);
      setType("");
      setActivity("");
    }
  }, [openModal]);

  const modalClose = () => {
    serveDispatch({ type: ActionTypes.OPEN_SUGGESTION, payload: false });
  };
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };
  const changeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };
  const changeParticipants = (event: React.ChangeEvent<HTMLInputElement>) => {
    const participantsNumber = Number(event.target.value);
    setParticipants(participantsNumber);
  };

  const sendSuggestion = async (): Promise<void> => {
    const data = { activity, type, participants };
    const res = await sendActivityWithSuggestion(data);
    serveDispatch({ type: ActionTypes.SUGGEST_RESPONSE, payload: res });
    serveDispatch({ type: ActionTypes.OPEN_SUGGESTION, payload: false });
    setParticipants(1);
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
      <FormControl>
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
          <TextField required id="standard-basic" onChange={changeInput} />

          <TextField
            className={classes.textField}
            id="standard-number"
            type="number"
            value={participants}
            variant="outlined"
            onChange={changeParticipants}
            label="participants"
            InputLabelProps={{
              shrink: true,
            }}
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
      >
        {body}
      </Grid>
    </Modal>
  );
};

export default ModalSuggestActivity;
