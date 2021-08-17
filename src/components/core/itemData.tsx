import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import PeopleIcon from "@material-ui/icons/People";
import BuildIcon from "@material-ui/icons/Build";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import WorkIcon from "@material-ui/icons/Work";
import LoopIcon from "@material-ui/icons/Loop";

const itemData = [
  {
    img: "image1",
    title: "education",
    src: "education.jpg",
    subtitle: "Because we are all students",
    icon: <SchoolIcon />,
  },
  {
    img: "image2",
    title: "recreational",
    src: "recreation.jpg",
    subtitle: "Who doesn't like having fun?",
    icon: <DirectionsBikeIcon />,
  },
  {
    img: "image3",
    title: "social",
    src: "social.jpg",
    subtitle: "Need some friends?",
    icon: <PeopleIcon />,
  },
  {
    img: "image4",
    title: "diy",
    src: "diy.jpg",
    subtitle: "Do It Yourself!",
    icon: <BuildIcon />,
  },
  {
    img: "image5",
    title: "charity",
    src: "charity.jpg",
    subtitle: "There's always more to give",
    icon: <FavoriteIcon />,
  },
  {
    img: "image6",
    title: "cooking",
    src: "cooking.jpg",
    subtitle: "Spend less time on Seamless and more in your kitchen",
    icon: <RestaurantMenuIcon />,
  },
  {
    img: "image7",
    title: "relaxation",
    src: "relaxation.jpg",
    subtitle: "Stressed? Just chill out",
    icon: <BeachAccessIcon />,
  },
  {
    img: "image8",
    title: "music",
    src: "music.jpg",
    subtitle: "Get them vibes",
    icon: <MusicNoteIcon />,
  },
  {
    img: "image9",
    title: "busy work",
    src: "busywork.jpg",
    subtitle: "Get up off that coach NOW",
    icon: <WorkIcon />,
  },
  {
    img: "image10",
    title: "random",
    src: "random.jpg",
    subtitle: "Get a random activity",
    icon: <LoopIcon />,
  },
];
export default itemData;
