import axios from "axios";
import global from "../constants/global";

let commonUtils = {
  getUsers() {
    return axios
      .get(`${global.baseUrl}/api`)
      .then((response) => {
       return response.data
      });
  },
}

export default commonUtils;
