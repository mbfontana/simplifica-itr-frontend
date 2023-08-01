import { MainAPI } from "../AuthenticatedAxios";
import { GetAllCitiesResponse } from "./types";

export const getAllCities = () => MainAPI.get<GetAllCitiesResponse[]>("/city");
