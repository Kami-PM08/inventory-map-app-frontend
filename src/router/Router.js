import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import App from "../App";
import MapPage from "../pages/Map";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MapPage />} >

    </Route>
  )
);

export default Router;
