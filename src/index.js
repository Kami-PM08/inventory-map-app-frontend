import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import "./index.css";
import router from "./router/Router";

 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaS1wbTA4IiwiYSI6ImNsZW91b3g3NjAybmQzd25xY3RtZTgwMGcifQ.GTAMGgjd-BYz57mF8Pd2Aw';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
