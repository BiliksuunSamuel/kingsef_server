export interface IPersonInfo {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  auth_id: string;
  status: number;
  authenticated: boolean;
  otp_expiresIn: string;
  ratings: {
    raters: string[];
    values: { id: string; score: number }[];
  };
  followers: string[];
}
export interface ICountryInfo {
  state_region: any;
  dial_code: string;
  name: string;
  code: string;
  flag: string;
  currency: string;
}

export interface IAccountInfo {
  status: number;
  role: number;
}

export interface IBusinessInfo {
  title: string;
  motto: string;
  address: string;
}
export interface IAuthInfo {
  password: string;
  authenticated: boolean;
  status: number;
  otp: { code: string; status: number };
}

export interface IBankInfo {
  name: string;
  branch: string;
  number: string;
  iban: string;
}
