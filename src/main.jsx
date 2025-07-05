import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { PrimeSenderControllerProvider } from "./components/context";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <PrimeSenderControllerProvider>
        <Suspense fallback={<div>Loading...</div>}>
        <App />
              </Suspense>
      </PrimeSenderControllerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
