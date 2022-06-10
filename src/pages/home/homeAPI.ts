import { apiClient, handle } from "../../api/apiClient";
import { IUsersInfoData } from "./homeModels";

export const getUserInfo = () => {
  return handle<IUsersInfoData>(apiClient.get("/"));
};
