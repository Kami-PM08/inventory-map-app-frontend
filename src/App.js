import useLocation from "./utils/useLocation";
// import useSWR from "swr";



// const DEFAULT_LOCATION = {
//   latitude: 4.712977399850152,
//   longitude: -74.04462831952155,
// };

// const getLocation = async () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         const currentLocation = {
//           longitude: coords.longitude,
//           latitude: coords.latitude,
//         };
//         console.log(currentLocation);
//         resolve(currentLocation);
//       },
//       (error) => {
//         alert("Error al obtener ubicación. Seutilizará una por defecto");
//         console.error("Error al obtener ubicación", error);
//         reject();
//       }
//     );
//   });
// };
const App = () => {

  
  // const useLocation = () => {
  //   // if (!navigator.geolocation) {
  //   //   return {
  //   //     isLoading: false,
  //   //     currentLocation: DEFAULT_LOCATION,
  //   //   };
  //   // }
  //   const { data, error, isLoading } = useSWR("currentLocation", getLocation);
  //   return {
  //     isLoading,
  //     currentLocation: error ? DEFAULT_LOCATION : data,
  //   };
  // };

  const { isLoading, currentLocation } = useLocation();
  console.log("dataLoc", currentLocation);
  return (
    <div>
      <h1>Hola mundo</h1>
      {isLoading ? <p>Cargando...</p> : <p>Lng{currentLocation.longitude}</p>}
    </div>
  );
};

export default App;
