import React from "react";
import { CircularProgress, Fade } from "@material-ui/core";
import useStyles from "./styles";
import "./spinner.css";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

export default function CircularIndeterminate() {
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);

  return (
    <div className={classes.spinner}>
      <CircularProgress className={classes.progress} />

      <Fade in={repeatedActivity}>
        <div className={classes.modalPaper}>
          <h2 id="transition-modal-title"></h2>
        </div>
      </Fade>
    </div>
  );
}
