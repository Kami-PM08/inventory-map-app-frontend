import getMarkers from "../services/marker/getMarkers";
import getMarkersByUser from "../services/marker/getMarkersByUser";

const getMarkersForRol = async(user) => {
  const { rol, user_name, token } = user;
  if (rol === "ADMIN") {
    return await getMarkers(token);
  } else {
    return await getMarkersByUser(token, user_name);
  }
};

export default getMarkersForRol;
