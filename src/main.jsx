import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@material-tailwind/react";
import { PrimeSenderControllerProvider } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1069841362211-rjhtceubkt7e2opf7vn8bc28pfe2alrq.apps.googleusercontent.com">
      <ThemeProvider>
        <PrimeSenderControllerProvider>
          <App />
        </PrimeSenderControllerProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
