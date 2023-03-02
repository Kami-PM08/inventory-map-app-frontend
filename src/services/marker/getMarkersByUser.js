import axios from "axios";
import config from "../../config/config";

export default (token, user) =>
  axios
    .get(config.API_URL + "marker/" + user, {
      headers: {
        "jwt-auth": token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
