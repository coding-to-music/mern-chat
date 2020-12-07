import axios from "axios";

// create an instance so that every time we do a get or post request it has this base URL
const instance = axios.create({
  baseURL: "http://localhost:9000"
});

export default instance; 