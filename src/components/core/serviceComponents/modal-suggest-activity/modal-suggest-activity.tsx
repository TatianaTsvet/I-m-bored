import React, { useState, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";
import { sendActivityWithSuggestion } from "../../../../service/asyncRequests";
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
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(1);

  const openModal = useTypedSelector(
    (state) => state.serviceReducers.suggestionModal
  );
  useEffect(() => {
    if (!openModal) {
      setParticipants(1);
      setType("");
      setActivity("");
    }
  }, [openModal]);
  if (!openModal) return null;
  const modalClose = () => {
    dispatch({ type: "openSuggestion", payload: false });
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
  const sendSuggestion = () => {
    const data = { activity, type, participants };
    dispatch(sendActivityWithSuggestion(data));
    dispatch({ type: "openSuggestion", payload: false });
    setParticipants(1);
  };

  const disabled =
    activity === "" || type === "" || participants <= 0 ? true : false;

  const types = availableTypes.map((item) => {
    return (
      <option value={item.replace(" ", "")} key={item}>
        {item.toUpperCase()}
      </option>
    );
  });
  const body = (
    <div className="border-0 z-50 rounded-lg shadow-lg relative flex flex-row p-5 bgWhite ">
      <form action="">
        <p className="font-bold text-lg md:text-2xl text-justify">
          Suggest a new activity to the Bored API team and see your activity in
          future displays!
        </p>
        <input
          type="text"
          className="w-full mt-5 borderYellow border-b-2 focus:outline-none"
          onChange={changeInput}
          placeholder="Write New Activity"
        />
        <div className="flex flex-row mt-5 justify-between">
          <div>
            <label className="pr-2" htmlFor="sendCategory">
              Categories:
            </label>
            <select
              onChange={changeSelect}
              id="sendCategory"
              className="md:w-52  border-b-2 borderYellow focus:outline-none"
              defaultValue="Select category"
            >
              <option disabled>Select category</option>
              {types}
            </select>
          </div>
          <div>
            <label className="pr-2" htmlFor="sendParticipants">
              Participants:
            </label>
            <input
              className=" border-b-2 w-10 focus:outline-none borderYellow"
              id="sendParticipants"
              type="number"
              min="1"
              onChange={changeParticipants}
              value={participants}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-3">
          <button
            className="bgYellow rounded-full font-bold uppercase text-sm px-6 py-3  hoverBg hoverTextWhite outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={modalClose}
          >
            Close
          </button>
          <button
            className={
              " font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear " +
              (disabled
                ? " bg-gray-500 cursor-not-allowed opacity-50 textWhite rounded-full"
                : " bgYellow ease-in-out hoverBg hoverTextWhite transition-all duration-150")
            }
            type="button"
            onClick={() => sendSuggestion}
          >
            Send suggestion
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bgWhite justify-center items-center m-2 content-center ">
          {body}
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40  bg-black"
        onClick={modalClose}
      ></div>
    </div>
  );
};

export default ModalSuggestActivity;
