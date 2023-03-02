import axios from "axios";
import config from "../config/config";

export default (data) =>
  axios
    .post(config.API_URL + "auth/login", data)
    .then((res) => {
      return res.headers.jwt
    })
    .catch((error) => console.log(error));
