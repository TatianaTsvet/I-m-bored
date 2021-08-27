import React, { FC, useCallback } from "react";
import { IFilterProps } from "../../../interfaces/interfaces";
import "./filter.css";

const Filter: FC<IFilterProps> = (props) => {
  const { switchType, icon, title } = props;

  const handleFilterClick = useCallback(() => {
    switchType(title, true);
  }, [switchType, title]);

  // const handleFilterClick = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
  //     switchType(title, checked);
  //   },
  //   [switchType, title]
  // );

  return (
    <button onClick={handleFilterClick} name={title} value={title}>
      {icon}
    </button>
    // <input
    //   className=" "
    //   type="checkbox"
    //   icon={icon}
    //   onChange={handleFilterClick}
    //   checkedIcon={icon}
    //   name="checkedH"
    //   value={title}
    //   color="primary"
    // />
  );
};

export default Filter;
