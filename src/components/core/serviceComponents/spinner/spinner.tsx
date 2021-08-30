import React from "react";
import { ISpinnerProps } from "../../../../interfaces/interfaces";
import "./spinner.css";
const Spinner = (props: ISpinnerProps) => {
  if (!props.loading) return null;

  return (
    // <button type="button" className="bg-rose-600 ..." disabled>
    //   <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    //   Processing
    // </button>
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <svg
                className="animate-spin text-green-200 bg-rose-600 h-24 w-24 "
                viewBox="0 0 24 24"
              ></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
