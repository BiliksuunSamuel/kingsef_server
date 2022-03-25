export interface IUserInfo {
  firstname: string;
  lastname: string;
  email: string;
  country: ICountry;
  state: any;
  id: string;
  auth_id: string;
  verification_id: string;
  authenticated: boolean;
  status: number;
}
export interface ICountry {
  name: string;
  dial_code: string;
  code: string;
}
