import { MainAPI } from "../AuthenticatedAxios";
import { GetUserSubscription } from "./types";

export const getUserSubscription = () =>
  MainAPI.get<GetUserSubscription>(`/subscription`);
