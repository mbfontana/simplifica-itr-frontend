import axios from "axios";
import { AppConfig } from "../global/AppGlobalConfig";

const createClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  client.interceptors.response.use(
    (response) => {
      if (response.status === 204) {
        response.data = null;
      }
      return response;
    },
    (error) => {
      let e = new Error("Unknown error in Client");
      return Promise.reject(e);
    }
  );

  return client;
};

export const MainAPI = createClient("https://localhost:7072/api");

const lookup = {
  main: MainAPI,
};

export const setAxiosToken = (api: "main", token: string) => {
  lookup[api].defaults.headers.common = { Authorization: `Bearer ${token}` };
};
