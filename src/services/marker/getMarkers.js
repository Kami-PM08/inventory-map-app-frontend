import axios from "axios";
import config from "../../config/config";

export default (token) =>
  axios
    .get(config.API_URL + "marker", {
      headers: {
        "jwt-auth": token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
