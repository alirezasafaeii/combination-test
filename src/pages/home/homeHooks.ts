import { useQuery } from "react-query";
import { getUserInfo } from "./homeAPI";
import { IUsersInfoData } from "./homeModels";

export const useHome = () => {
  const userInfo = useQuery<IUsersInfoData, Error>("userInfo", getUserInfo);

  return {
    userInfo,
  };
};
