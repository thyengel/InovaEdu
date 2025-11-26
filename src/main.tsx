import { Provider } from "@/components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import AlertProvider from "./context/AlertProvider";
import LikeProvider from "./context/LikeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <AlertProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </AlertProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
