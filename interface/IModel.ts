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

export interface INotificationInfo {
  subject: string;
  reference: { title: string; id: string };
  date: string;
  sender: { isAdmin: boolean; id: string };
  message: string;
  status: { seen: boolean };
  receiver: string;
}
export interface IUserReview {
  message: string;
  date_added: string;
  sender: {
    country_name: string;
    country_code: string;
  };
}
