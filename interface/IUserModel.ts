import { IAuthInfo, ICountryInfo, IPersonInfo } from "./IPersonModel";

export interface IUserAccountInfo {
  info: IPersonInfo;
  auth: IAuthInfo;
  country: ICountryInfo;
}
