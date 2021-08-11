import React, { FC, useCallback } from "react";
import { Checkbox } from "@material-ui/core";
import { IFilterProps } from "../../../interfaces/interfaces";
import useStyles from "./styles";
import "./filter.css";

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
