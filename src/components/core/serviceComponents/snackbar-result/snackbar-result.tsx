import React, { useEffect } from "react";
import "./snackbar-result.css";
import { ISnackbarProps } from "../../../../interfaces/interfaces";

const SnackbarResult = ({
  snackbar,
  snackbarClose,
  suggestResponse,
}: ISnackbarProps) => {
  useEffect(() => {
    if (snackbar) {
      const timeout = setTimeout(() => snackbarClose(), 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [snackbar, snackbarClose]);

  if (!snackbar) return null;
  return (
    <div className="bg-green-500 fixed right-2 bottom-1 font-medium p-2 md:p-5">
      {suggestResponse.message}
    </div>
  );
};

export default SnackbarResult;
