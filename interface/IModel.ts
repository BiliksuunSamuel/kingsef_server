export interface IMerit {
  value: number;
  title: string;
}

export interface ICountryStates {
  name: string;
  isoCode: number;
  countryCode: string;
  latitude: number;
  longitude: number;
}

export interface IDeliverPricing {
  state_city: any;
  vendor_id: string;
  amount: number;
  reason: string;
}
