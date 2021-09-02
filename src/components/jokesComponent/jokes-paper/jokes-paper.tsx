import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import JokesItems from "../jokes-items";
import { fetchJokes } from "../../../service/asyncRequests";
import { IJokesData } from "../../../interfaces/interfaces";
import "./jokes-paper.css";

const JokesPaper: FC = () => {
  const [page, setPage] = useState<number>(1);
  const matches = window.screen.width < 640 ? 4 : 6;

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
      <div className="flex flex-row justify-center text-white">
        <button
          className={
            " uppercase w-28 md:w-32 text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear " +
            (page === 1
              ? " bg-gray-500 cursor-not-allowed opacity-50 textWhite rounded-full"
              : " bgYellow ease-in-out hoverBg hoverTextWhite transition-all duration-150")
          }
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
        >
          previous
        </button>
        <p className="text-xl text-black p-2">{page}</p>
        <button
          className={
            " uppercase w-28 md:w-32 text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear " +
            (page === 30
              ? " bg-gray-500 cursor-not-allowed opacity-50 textWhite rounded-full"
              : " bgYellow ease-in-out hoverBg hoverTextWhite transition-all duration-150")
          }
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          next
        </button>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2">{jokes}</div>
    </>
  );
};

export default JokesPaper;
