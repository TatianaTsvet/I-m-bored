import React, { FC } from "react";
import clsx from "clsx";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { IJokesItemsProps } from "../../../interfaces/interfaces";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import ModalSocial from "../../core/serviceComponents/modal-social";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
    <Grid
      item
      container
      xs={12}
      sm={6}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Card elevation={5} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              DJ
            </Avatar>
          }
          action={
            <IconButton
              className={classes.icon}
              aria-label="share"
              onClick={() => openShareModal(true)}
            >
              <ShareIcon />
            </IconButton>
          }
          title={
            <Typography variant="subtitle1" className={classes.title}>
              Dad Jokes
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {joke}
          </Typography>
        </CardContent>

        <ModalSocial
          joke={joke}
          open={sharedModal}
          openShareModal={openShareModal}
        />
      </Card>
    </Grid>
  );
};

export default JokesItems;
