import { MainAPI } from "../AuthenticatedAxios";
import { GetUserSubscription, Subscription } from "./types";

export const getAllSubscriptions = () =>
  MainAPI.get<Subscription[]>(`/subscriptions`);

export const getUserSubscription = () =>
  MainAPI.get<GetUserSubscription>(`/subscriptions/user`);
