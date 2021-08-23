import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import JokesItems from "../jokes-items";
import { fetchJokes } from "../../../service/asyncRequests";
import { IJokesData } from "../../../interfaces/interfaces";
import { Grid, IconButton, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import useStyles from "./styles";
import "./jokes-paper.css";

const JokesPaper: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, status } = useQuery(["jokes", page], fetchJokes);
  const classes = useStyles();

  const jokes =
    status === "success"
      ? data.results.map((item: IJokesData) => (
          <JokesItems key={item.id} id={item.id} joke={item.joke} />
        ))
      : null;
  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    console.log(page);
  };
  return (
    <>
      {jokes}
      <Grid container justifyContent="center" className={classes.pageButtons}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <p>page</p>
        <IconButton onClick={nextPage}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default JokesPaper;
