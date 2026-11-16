import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a01ff30c2b24b798f2b09b55b6679ed",
  },
});
