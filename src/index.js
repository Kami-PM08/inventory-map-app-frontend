import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";
import Router from "./router/Router";
import UserProvider from "./context/user/UserProvider";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FtaS1wbTA4IiwiYSI6ImNsZW91b3g3NjAybmQzd25xY3RtZTgwMGcifQ.GTAMGgjd-BYz57mF8Pd2Aw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
