import React, { FC } from "react";
import {
  VKShareButton,
  VKIcon,
  OKIcon,
  OKShareButton,
  TelegramShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  TwitterShareButton,
  TwitterIcon,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { IJokesShareModal } from "../../../../interfaces/interfaces";

import "./modal-social.css";

const ModalSocial: FC<IJokesShareModal> = (props) => {
  const { joke, open, openShareModal } = props;

  const shareUrl = "https://icanhazdadjoke.com/";
  const title = joke;
  if (!open) return null;
  const body = (
    <div className="border-0 z-50 rounded-lg shadow-lg relative p-5 bgWhite ">
      <p className="md:text-xl">Share joke with a friend </p>

      <p className="text-black text-lg md:text-2xl">{joke}</p>
      <div className="flex flex-row">
        <div className="Demo__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={38} round />
          </FacebookMessengerShareButton>
        </div>
        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={38} round />
          </TwitterShareButton>
        </div>
        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={38} round />
          </TelegramShareButton>
        </div>
        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            // separator=""
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={38} round />
          </WhatsappShareButton>
        </div>
        <div className="Demo__some-network">
          <VKShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <VKIcon size={38} round />
          </VKShareButton>
        </div>
        <div className="Demo__some-network">
          <OKShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <OKIcon size={38} round />
          </OKShareButton>
        </div>
      </div>
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
        onClick={() => openShareModal(false)}
      ></div>
    </div>
  );
};

export default ModalSocial;
