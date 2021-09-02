import React, { FC } from "react";
import itemData from "../../core/itemData";
import { fetchNewActivity } from "../../../service/asyncRequests";
import { useDispatch } from "react-redux";
import "./cards-list.css";

const CardsList: FC = () => {
  const dispatch = useDispatch();
  const modalOpen = (type: string) => {
    const newType = type.replace(" ", "");
    dispatch(fetchNewActivity(newType));
    dispatch({ type: "switchLoading", payload: true });
    dispatch({ type: "openModal", payload: true });
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
      {itemData.map((item) => (
        <div key={item.title} className="relative">
          <img
            className="h-40 md:h-52 w-full object-cover"
            alt={item.title}
            src={`images/${item.src}`}
          />
          <div className="absolute inset-x-0 bottom-0 h-16  flex items-center justify-between bg-gray-800 bg-opacity-60 px-2">
            <div className="textWhite">
              <h4>{item.title.toUpperCase()}</h4>
              <h6>{item.subtitle}</h6>
            </div>
            <button
              className="justify-self-end flex flex-wrap content-center p-3 rounded-full textYellow bg-yellow-100 hover:bg-yellow-200 hover:text-yellow-900 "
              onClick={() => modalOpen(item.title)}
            >
              {item.icon}
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CardsList;
