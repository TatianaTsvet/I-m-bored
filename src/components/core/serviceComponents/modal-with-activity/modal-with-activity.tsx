import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";
import { IActivity } from "../../../../interfaces/interfaces";
import { heartIcon, userIconSolid, closeIcon } from "../../icons";
import "./modal-with-activity.css";

const ModalWithActivity: FC = () => {
  const dispatch = useDispatch();

  const modalClose = () => {
    dispatch({ type: "openModal", payload: false });
  };
  const addToFavorite = (activity: IActivity) => {
    dispatch({ type: "addToActivityList", payload: activity });
    dispatch({ type: "openModal", payload: false });
  };

  const modalOpen = useTypedSelector((state) => state.serviceReducers.modal);
  const randomActivity = useTypedSelector(
    (state) => state.mainReducers.randomActivity
  );
  if (!modalOpen) return null;
  const participants = [
    <span className="inline-block " key="personIcon">
      {userIconSolid}
    </span>,
  ];
  randomActivity.map((item) => {
    for (let i = 1; i < item.participants; i++) {
      participants.push(
        <span className="inline-block" key={`personIcon${i}`}>
          {userIconSolid}
        </span>
      );
    }
    return participants;
  });

  const body = randomActivity.map((item) => {
    return (
      <div
        key={item.key}
        className="border-0 z-50 rounded-lg shadow-lg relative flex flex-row p-3 bgWhite "
      >
        <div>
          <p className="text-lg md:text-xl m-2">{item.activity}</p>
          <p className=" md:text-xl m-2">
            Participants:
            <span className="inline-block textYellow m-2">{participants}</span>
          </p>
          <button
            className="textYellow m-2 rounded-full h-11 w-11 flex justify-center items-center content-center hover:bg-yellow-100 hoverTextYellow"
            onClick={() => addToFavorite(item)}
          >
            {heartIcon}
          </button>
        </div>
        <div>
          <button className="textYellow hoverTextYellow" onClick={modalClose}>
            {closeIcon}
          </button>
        </div>
      </div>
    );
  });

  return (
    <div
      onClick={modalClose}
      className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bgWhite justify-center items-center m-2 content-center ">
          {body}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default ModalWithActivity;
