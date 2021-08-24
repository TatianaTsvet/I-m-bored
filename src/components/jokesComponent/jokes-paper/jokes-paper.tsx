import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import JokesItems from "../jokes-items";
import { fetchJokes } from "../../../service/asyncRequests";
import { IJokesData } from "../../../interfaces/interfaces";
import { Grid, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./styles";
import "./jokes-paper.css";

const JokesPaper: FC = () => {
  const [page, setPage] = useState<number>(1);
  const matches = useMediaQuery("(max-width:600px)") ? 4 : 6;

  const { data, status } = useQuery(["jokes", page, matches], fetchJokes);
  const classes = useStyles();

  const jokes =
    status === "success"
      ? data.results.map((item: IJokesData) => (
          <JokesItems key={item.id} id={item.id} joke={item.joke} />
        ))
      : null;

  return (
    <>
      {jokes}
      <Grid container justifyContent="center">
        <IconButton
          className={classes.pageButton}
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h5" className={classes.pageNumber}>
          {page}
        </Typography>
        <IconButton
          className={classes.pageButton}
          disabled={page >= 33 ? true : false}
          onClick={() => setPage((old) => old + 1)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default JokesPaper;
