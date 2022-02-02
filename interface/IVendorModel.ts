import {
  IAuthInfo,
  IBankInfo,
  IBusinessInfo,
  ICountryInfo,
  IPersonInfo,
} from "./IPersonModel";

export interface IVendorAccountInfo {
  info: IPersonInfo;
  country: ICountryInfo;
  business: IBusinessInfo;
  auth: IAuthInfo;
  bank: IBankInfo;
}
