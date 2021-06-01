import axios from "axios";
import { get, isEmpty } from "lodash";
import { apiDetails } from "./helpers";

function createAPIInstance() {
  const api = axios.create({
    baseURL: apiDetails.baseUrl.trim(),
    headers: { "Content-Type": "application/json" },
  });

  api.interceptors.response.use(
    (response) => {
      const errorResponse = get(response, "data.result.error", {});
      if (!isEmpty(errorResponse)) {
        throw errorResponse;
      }
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return api;
}

export default createAPIInstance;
