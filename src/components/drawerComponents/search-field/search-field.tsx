import React, { FC, useCallback, useState } from "react";
import Filter from "../filter";
import itemData from "../../core/itemData";
import "./search-field.css";
import { ISearchFieldProps } from "../../../interfaces/interfaces";
import { searchIcon, userIcon } from "../../core/icons";

const SearchField: FC<ISearchFieldProps> = (props) => {
  const { onCheckFilter, onSearch, onCountChange, count } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleSearchInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch]
  );

  const handleCountInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value >= "1") {
        onCountChange(Number(event.target.value));
      } else {
        onCountChange(1);
      }
    },
    [onCountChange]
  );

  const icons = (
    <div className={checked ? "block" : "hidden md:block"}>
      <p className="text-lg pb-2 pl-1">Filters:</p>
      {itemData.map(({ title, icon }) => (
        <Filter
          key={title}
          title={title}
          icon={icon}
          switchType={onCheckFilter}
        />
      ))}
    </div>
  );

  return (
    <div className="search-field">
      <div className="inline-flex md:hidden mt-2">
        <div className="relative flex-block w-14 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            onChange={handleChange}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-400"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <div>
          <label htmlFor="toggle" className="text-md text-orange-600 ml-4">
            {!checked ? "Show filters" : "Hide filters"}
          </label>
        </div>
      </div>

      {icons}
      <div className="relative flex justify-between border-b-2 mt-1 borderYellow  textYellow  p-2">
        <div>
          <span className="absolute inset-y-0 left-0 flex items-center">
            {searchIcon}
          </span>
          <input
            className="bg-gray-900 borderYellow placeholder-yellow-500 pl-6 focus:outline-none"
            placeholder="search"
            type="text"
            onChange={handleSearchInput}
          />
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
            {userIcon}
          </span>
          <input
            className="bg-gray-900 pl-10 w-24 focus:outline-none"
            type="number"
            onChange={handleCountInput}
            value={count}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
