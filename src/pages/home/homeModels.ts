export interface IUsersInfoData {
  results: IUserInfoResult[];
  info: IInfo;
}
export interface IUserInfoResult {
  name: IName;
  picture: IPicture;
  location: ILocation;
}
interface IName {
  first: string;
  last: string;
  title: string;
}
interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface ILocation {
  country: string;
}
interface IName {
  title: string;
  first: string;
  last: string;
}
interface IInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}
