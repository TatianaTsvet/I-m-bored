import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import JokesItems from "../jokes-items";
import { fetchJokes } from "../../../service/asyncRequests";
import { IJokesData } from "../../../interfaces/interfaces";
import { Grid, useMediaQuery } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import "./jokes-paper.css";

const JokesPaper: FC = () => {
  const [page, setPage] = useState<number>(1);
  const matches = useMediaQuery("(max-width:600px)") ? 4 : 6;
 
  const { data, status } = useQuery(
    ["jokes", page, matches],
    () => fetchJokes(page, matches),
    {
      keepPreviousData: true,
    }
  );

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
        <Pagination  className="pageNumber"
          size={matches === 4 ? "small" : "large"}
          count={33}
          color="secondary"
          onChange={(event, page) => setPage(page)}
        />
      </Grid>
    </>
  );
};

export default JokesPaper;
