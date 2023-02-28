import useSWR from "swr";

const DEFAULT_LOCATION = {
  latitude: 4.712977399850152,
  longitude: -74.04462831952155,
};

const getLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const currentLocation = {
          longitude: coords.longitude,
          latitude: coords.latitude,
        };
        resolve(currentLocation);
      },
      (error) => {
        alert("Error al obtener ubicación. Seutilizará una por defecto");
        console.error("Error al obtener ubicación", error);
        reject();
      }
    );
  });
};

const useLocation = () => {
  const { data, error, isLoading } = useSWR("currentLocation", getLocation);
  return {
    isLoading,
    currentLocation: error ? DEFAULT_LOCATION : data,
  };
};

export default useLocation;
