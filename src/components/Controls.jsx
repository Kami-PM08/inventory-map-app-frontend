import React, { useContext, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import {
  AddLocationAltOutlined,
  LogoutOutlined,
  MyLocationOutlined,
  PersonAdd,
} from "@mui/icons-material";
import useLocation from "../utils/useLocation";
import { UserContext } from "../context/user/UserProvider";
import AddMarkerDialog from "./AddMarkerDialog";
import AddUserDialog from "./AddUserDialog";

const Controls = ({ map }) => {
  const { resetUser, rol } = useContext(UserContext);
  const { isLoading, currentLocation } = useLocation();
  const [openAddMarker, setOpenAddMarker] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);

  const resetPosition = () => {
    if (!isLoading) {
      map.flyTo({
        zoom: 15,
        center: [currentLocation.longitude, currentLocation.latitude],
      });
    }
  };

  const logOut = () => {
    resetUser();
  };

  return (
    <Grid
      bgcolor="#000a"
      style={{ position: "relative", zIndex: 1, paddingInline: "1em" }}
    >
      <IconButton size="large" color="error" onClick={logOut}>
        <LogoutOutlined />
      </IconButton>
      <IconButton
        style={{ float: "right" }}
        size="large"
        color="info"
        onClick={resetPosition}
      >
        <MyLocationOutlined />
      </IconButton>
      <IconButton
        style={{ float: "right" }}
        size="large"
        color="info"
        onClick={() => setOpenAddMarker(true)}
      >
        <AddLocationAltOutlined />
      </IconButton>
      {rol === "ADMIN" && (
        <>
          <IconButton
            style={{ float: "right" }}
            size="large"
            color="success"
            onClick={() => setOpenAddUser(true)}
          >
            <PersonAdd />
          </IconButton>
          <AddUserDialog
            open={openAddUser}
            handleClose={() => setOpenAddUser(false)}
          />
        </>
      )}
      <AddMarkerDialog
        open={openAddMarker}
        map={map}
        handleClose={() => setOpenAddMarker(false)}
      />
    </Grid>
  );
};

export default Controls;
