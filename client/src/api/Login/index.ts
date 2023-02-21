import { MainAPI } from "../AuthenticatedAxios";
import { LoginUserResponse } from "./types";

export const loginUser = (email, password) =>
  MainAPI.post<LoginUserResponse>("/user/login", {
    email: email,
    password: password,
  });
