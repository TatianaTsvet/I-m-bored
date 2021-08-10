import React, { FC, useCallback } from "react";
import { Checkbox } from "@material-ui/core";

import useStyles from "./styles";
import "./filter.css";

interface IFilterProps {
  switchType: (title: IFilterProps["title"], checked: boolean) => void;
  title: string;
  icon: React.ReactNode;
}

const Filter: FC<IFilterProps> = (props) => {
  const classes = useStyles();

  const { switchType, icon, title } = props;

  const handleFilterClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      switchType(title, checked);
    },
    [switchType, title]
  );

  return (
    <Checkbox
      className={classes.checkbox}
      icon={icon}
      onChange={handleFilterClick}
      checkedIcon={icon}
      name="checkedH"
      value={title}
      color="primary" 
    />
  );
};

export default Filter;
