import React, { FC } from "react";
import "./activities-field.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { IFavoriteActivitiesProps } from "../../../interfaces/interfaces";
import { heartIcon, trashIcon } from "../../core/icons";
const ActivitiesField: FC<IFavoriteActivitiesProps> = ({
  activities,
  checked,
  drawerType,
}) => {
  const dispatch = useDispatch();
  const favoriteActivities = useTypedSelector(
    (state) => state.mainReducers.favorites
  );

  const deleteActivity = (key: number) => {
    dispatch({ type: "deleteFavoriteActivity", payload: key });
  };
  if (drawerType === "favorites" && favoriteActivities.length === 0) {
    return (
      <p className="text-xl md:text-2xl mt-2 md:mt-4">
        You currently have no boring antidotes in favorites
      </p>
    );
  }

  const addToLiked = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      dispatch({
        type: "deleteFavoriteActivity",
        payload: event.target.value,
      });
    } else {
      dispatch({
        type: "changeLiked",
        payload: event.target.value,
      });
    }
  };

  return (
    <div className="favorite-activities">
      {activities
        .filter(({ type }) => {
          if (type) {
            return !checked.includes(type);
          }
          return true;
        })
        .map((item) => (
          <div key={item.key} className="flex justify-between content-center">
            <div className="">
              <p className="text-lg md:text-xl my-2">{item.activity}</p>
            </div>
            <div className="m-2">
              {drawerType === "favorites" ? (
                <button
                  title="add to history"
                  className="hoverTextYellow"
                  onClick={() => deleteActivity(item.key)}
                >
                  {trashIcon}
                </button>
              ) : (
                <>
                  <input
                    className=" form-checkbox absolute opacity-0 "
                    type="checkbox"
                    id={item.activity}
                    onChange={addToLiked}
                    value={item.key}
                  />
                  <label
                    className={item.liked ? "text-red-600" : "text-gray-400"}
                    title="return to favorites"
                    htmlFor={item.activity}
                  >
                    {heartIcon}
                  </label>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default ActivitiesField;
