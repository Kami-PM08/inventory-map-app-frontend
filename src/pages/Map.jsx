import { Map, Marker, Popup } from "mapbox-gl";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import useLocation from "../utils/useLocation";
import Controls from "../components/Controls";
import { Typography } from "@mui/material";
import useMarkers from "../utils/getMarkersForRol";
import MarkerPopup from "../components/MarkerPopup";
import getMarkersForRol from "../utils/getMarkersForRol";
import { UserContext } from "../context/user/UserProvider";

const MapPage = () => {
  const user = useContext(UserContext);
  const { isLoading, currentLocation } = useLocation();
  const [map, setMap] = useState(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const newMap = new Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [currentLocation.longitude, currentLocation.latitude],
        zoom: 12,
      });
      const herePopup = new Popup().setHTML(
        renderToString(<Typography variant="h1">Estas Aquí</Typography>)
      );
      new Marker()
        .setLngLat([currentLocation.longitude, currentLocation.latitude])
        .setPopup(herePopup)
        .addTo(newMap);
      setMarkers(newMap);
      setMap(newMap);
    }
  }, [isLoading, currentLocation]);

  const setMarkers = async(map) => {
    const {markers} = await getMarkersForRol(user);
      for (const marker of markers) {
        const popup = new Popup().setHTML(
          renderToString(<MarkerPopup marker={marker} />)
        );
        new Marker()
          .setLngLat([marker.coords.longitude, marker.coords.latitude])
          .setPopup(popup)
          .addTo(map);
      }
  }

  return (
    <div id="map" style={{ height: "100vh", width: "100vw" }}>
      <Controls map={map} />
    </div>
  );
};

export default MapPage;
