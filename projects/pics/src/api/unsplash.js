import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7d5301c552ac73fde4de7fddb24858531ad93aa75c5c54b67bff6505fec3e712"
  }
});