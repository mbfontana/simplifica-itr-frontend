import axios from "axios";
import { AppConfig } from "../global/AppGlobalConfig";
import { useSessionStore } from "../stores/SessionStore";

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

  client.interceptors.request.use((config) => {
    const token = useSessionStore.getState().token;
    config.headers = { Authorization: `Bearer ${token}` };
    return config;
  });

  return client;
};

export const MainAPI = createClient("http://localhost:3001"); // Use the AppConfig in the future
export const HomeAPI = createClient("");

const lookup = {
  main: MainAPI,
  home: HomeAPI,
};

export const setAxiosToken = (api: string, token: string) => {
  lookup[api].defaults.headers.common = { Authorization: `Bearer ${token}` };
};
