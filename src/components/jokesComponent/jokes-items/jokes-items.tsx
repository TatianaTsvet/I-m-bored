import React, { FC } from "react";
import { shareIcon, smileIcon } from "../../core/icons";
import { IJokesItemsProps } from "../../../interfaces/interfaces";

import useStyles from "./styles";
import "./jokes-items.css";

const JokesItems: FC<IJokesItemsProps> = (props) => {
  const { joke } = props;
  const [sharedModal, setSharedModal] = React.useState(false);
  const classes = useStyles();

  const openShareModal = (open: boolean) => {
    setSharedModal(open);
  };

  return (
    <div className="textYellow border-2 m-2 p-2 border-yellow-500 rounded-md">
      <div className="flex flex-row justify-between">
        <div>{smileIcon}</div>
        <p>Dad Jokes</p>
        <button>{shareIcon}</button>
      </div>
      <p>{joke}</p>
    </div>
    // <Grid
    //   item
    //   container
    //   xs={12}
    //   sm={6}
    //   md={4}
    //   direction="column"
    //   justifyContent="space-between"
    //   alignItems="stretch"
    // >
    //   <Card elevation={5} className={classes.root}>
    //     <CardHeader
    //       avatar={
    //         <Avatar aria-label="recipe" className={classes.avatar}>
    //           DJ
    //         </Avatar>
    //       }
    //       action={
    //         <IconButton
    //           className={classes.icon}
    //           aria-label="share"
    //           onClick={() => openShareModal(true)}
    //         >
    //           <ShareIcon />
    //         </IconButton>
    //       }
    //       title={
    //         <Typography variant="subtitle1" className={classes.title}>
    //           Dad Jokes
    //         </Typography>
    //       }
    //     />
    //     <CardContent>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {joke}
    //       </Typography>
    //     </CardContent>

    //     <ModalSocial
    //       joke={joke}
    //       open={sharedModal}
    //       openShareModal={openShareModal}
    //     />
    //   </Card>
    // </Grid>
  );
};

export default JokesItems;
