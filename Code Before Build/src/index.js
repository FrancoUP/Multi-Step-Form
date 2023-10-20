import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Step1Provider } from "./context/Step1Context";
import { Step2Provider } from "./context/Step2Context";
import { Step3Provider } from "./context/Step3Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Step1Provider>
      <Step2Provider>
        <Step3Provider>
          <App />
        </Step3Provider>
      </Step2Provider>
    </Step1Provider>
  </React.StrictMode>
);
