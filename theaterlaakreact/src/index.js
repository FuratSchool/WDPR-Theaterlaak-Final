import "bootstrap/dist/css/bootstrap.css";
import React, { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "react-auth-kit";
const baseUrl = document.getElementsByTagName("base").href;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}
  >

    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
