import React, { FC } from "react";
import {
  FacebookShareCount,
  VKShareButton,
  VKIcon,
  OKIcon,
  OKShareButton,
  TelegramShareButton,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Modal, Grid, Typography } from "@material-ui/core";
import { IJokesShareModal } from "../../../../interfaces/interfaces";

import useStyles from "./styles";
import "./modal-social.css";

const ModalSocial: FC<IJokesShareModal> = (props) => {
  const { joke, open } = props;
  const classes = useStyles();
  const shareUrl = "https://icanhazdadjoke.com/";
  const title = joke;

  const body = (
    <Grid item xs={10} className={classes.paper}>
      <Grid>
        <Typography variant="h6" className={classes.shareTitle} align="center">
          Share joke with a friend
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.shareJoke}
          align="justify"
        >
          {joke}
        </Typography>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
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
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Modal
      open={open}
      onClose={() => props.openShareModal(false)}
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

export default ModalSocial;
