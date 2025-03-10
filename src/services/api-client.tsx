import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "681b24b1051042658d572c86ad40ba67",
  },
});

export default apiClient;
