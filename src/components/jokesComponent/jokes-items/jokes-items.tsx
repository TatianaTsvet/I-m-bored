import React, { FC } from "react";
import { shareIcon, smileIcon } from "../../core/icons";
import { IJokesItemsProps } from "../../../interfaces/interfaces";
import ModalSocial from "../../core/serviceComponents/modal-social";
import "./jokes-items.css";

const JokesItems: FC<IJokesItemsProps> = (props) => {
  const { joke } = props;
  const [sharedModal, setSharedModal] = React.useState(false);

  const openShareModal = (open: boolean) => {
    setSharedModal(open);
  };

  return (
    <div className="textYellow border-2 m-1 p-2 border-yellow-500 rounded-md">
      <div className="flex justify-between">
        <div className="inline-flex">
          {smileIcon} <p className="pl-2 md:text-lg  ">Dad Jokes</p>
        </div>

        <button onClick={() => openShareModal(true)}>{shareIcon}</button>
      </div>
      <p className="text-black pt-1 md:text-xl lg:text-2xl text-justify">
        {joke}
      </p>
      <ModalSocial
        joke={joke}
        open={sharedModal}
        openShareModal={openShareModal}
      />
    </div>
  );
};

export default JokesItems;
