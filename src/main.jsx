import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { PrimeSenderControllerProvider } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <PrimeSenderControllerProvider>
        <App />
      </PrimeSenderControllerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
