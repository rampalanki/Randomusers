import axios from "axios";
import global from "../constants/global";


/**
         * @description fetch data from Randomusers API
         * @method GET
         * @accessibility Public
         * @returns {Array} List of Userinfo
         */
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
