import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MarkerPopup = ({ marker }) => {
  return (
    <Card>
      {/* <CardMedia
              image={img}
              title={name}
            /> */}
      <CardContent>
        <Typography variant="h5">Articulo: {marker.name}</Typography>
        <Typography variant="body1">Usuario responsable: {marker.user}</Typography>
        <Typography variant="body2">{"Ubicación [lng, lat]:"}</Typography>
        <Typography variant="body2">{`[${marker.coords.longitude}, ${marker.coords.latitude}]`}</Typography>
        <Typography variant="body2">Creado: {marker.created}</Typography>
      </CardContent>
    </Card>
  );
};

export default MarkerPopup;
