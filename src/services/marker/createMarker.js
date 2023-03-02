import axios from "axios";
import config from "../../config/config";

export default (token, data) =>
  axios
    .post(config.API_URL + "marker", data, {
      headers: {
        "jwt-auth": token,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => console.log(error));
