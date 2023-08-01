import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StartupProvider } from "./components/StartupProvider";
import { QueryClient } from "react-query";

export const reactQueryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StartupProvider>
  </React.StrictMode>
);
