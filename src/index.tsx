import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
