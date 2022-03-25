import {
  IAuthInfo,
  IBankInfo,
  IBusinessInfo,
  ICountryInfo,
  IPersonInfo,
} from "./IPersonModel";

export interface IVendorAccountInfo {
  info: {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    auth_id: string;
    authenticated: boolean;
    otp_expiresIn: string;
    ratings: {
      raters: string[];
      values: { id: string; score: number }[];
    };
  };
  country: ICountryInfo;
  business: IBusinessInfo;
  auth: IAuthInfo;
  bank: IBankInfo;
}
