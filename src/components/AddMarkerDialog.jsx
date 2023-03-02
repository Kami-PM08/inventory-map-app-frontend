import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Marker, Popup } from "mapbox-gl";
import ButtonDialogAction from "./ButtonDialogAction";
import { renderToString } from "react-dom/server";
import { UserContext } from "../context/user/UserProvider";
import createMarker from "../services/marker/createMarker";
import MarkerPopup from "./MarkerPopup";

const AddMarkerDialog = ({ open, handleClose, map }) => {
  const { user_name, token } = useContext(UserContext);
  const [name, setName] = useState("");
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  const close = () => {
    setName("");
    setLat(null);
    setLng(null);
    handleClose();
  };

  const addMarker = async() => {
    try {
      const marker = await createMarker(token, {name, user: user_name, coords: {longitude: lng, latitude: lat}});
      console.log("first0")
      const popup = new Popup().setHTML(
        renderToString(<MarkerPopup marker={marker} />)
      );
      console.log("first1")

      new Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
      console.log("first2")
      map.flyTo({ zoom: 13, center: [lng, lat] });
      console.log("first3")

      close();
    } catch (error) {
      console.log(error)
      alert("Error al crear marcador");
    }
  };
  
  return (
    <Dialog open={open} onClose={close} >
      <DialogTitle >Añadir marcador</DialogTitle>
      <DialogContent >
        <TextField
          sx={{mt: "1em"}}
          label="Nombre del articulo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography variant="h6">Coordenadas:</Typography>
        <TextField
          style={{ marginRight: "0.5em" }}
          label="Longitud"
          type="number"
          value={lng}
          onChange={(e) => setLng(parseFloat(e.target.value))}
        />
        <TextField
          label="Latitud"
          type="number"
          value={lat}
          onChange={(e) => setLat(parseFloat(e.target.value))}
        />
      </DialogContent>
      <ButtonDialogAction close={close} onSubmit={addMarker} />
    </Dialog>
  );
};

export default AddMarkerDialog;
