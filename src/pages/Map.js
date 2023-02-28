import { Map, Marker, Popup } from "mapbox-gl";
import { useLayoutEffect, useState } from "react";
import useLocation from "../utils/useLocation";

const MapPage = () => {
  const { isLoading, currentLocation } = useLocation();
  const [map, setMap] = useState(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const newMap = new Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [currentLocation.longitude, currentLocation.latitude],
        zoom: 15,
      });
      const herePopup = new Popup().setHTML("Estas aquí");
      new Marker()
        .setLngLat([currentLocation.longitude, currentLocation.latitude])
        .setPopup(herePopup)
        .addTo(newMap);
      setMap(newMap);
    }
  }, [isLoading, currentLocation]);

  return <div id="map" style={{ height: "100vh", width: "100vw" }}></div>;
};

export default MapPage;
