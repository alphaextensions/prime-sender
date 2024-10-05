import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@material-tailwind/react";
import { PrimeSenderControllerProvider } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_PROD_GOOGLE_CLIENT_ID}>
      <ThemeProvider>
        <PrimeSenderControllerProvider>
          <App />
        </PrimeSenderControllerProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
