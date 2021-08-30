import React, { FC, useCallback, useState } from "react";
import { IFilterProps } from "../../../interfaces/interfaces";

const Filter: FC<IFilterProps> = (props) => {
  const { switchType, icon, title } = props;
  const [checkedLabel, setCheckedLabel] = useState(" inherit");
  const handleFilterClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switchType(title, e.target.checked);
      e.target.checked === true
        ? setCheckedLabel(" text-gray-500")
        : setCheckedLabel(" inherit");
    },
    [switchType, title]
  );

  return (
    <>
      <input
        className=" form-checkbox text-gray-400 absolute opacity-0 "
        type="checkbox"
        id={title}
        onChange={handleFilterClick}
        value={title}
      />
      <label
        className={
          "inline-flex cursor-pointer p-2 md:h-12 md:w-12 xl:h-14 xl:w-14" +
          checkedLabel
        }
        htmlFor={title}
      >
        {icon}
      </label>
    </>
  );
};

export default Filter;
