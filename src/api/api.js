import axios from "axios";

const api = axios.create({
  baseURL:
    "https://finall-project-backend-ippl-production.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
