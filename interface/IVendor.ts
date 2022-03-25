export interface IVendorInfo {
  name: string;
  email: string;
  country: string;
  store_id: string;
  state: any;
  status: number;
  role: number;
  verification_id: string;
  auth_id: string;
  verified: boolean;
  account: {
    name: string;
    branck: string;
    number: string;
    iban: string;
  };
}
