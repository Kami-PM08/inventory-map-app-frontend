import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { UserContext } from "../context/user/UserProvider";
import Login from "../pages/Login";
import MapPage from "../pages/Map";

const Router = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index={!isAuthenticated} element={<Login />} />
        {isAuthenticated && (
          <Route index={isAuthenticated} element={<MapPage />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
