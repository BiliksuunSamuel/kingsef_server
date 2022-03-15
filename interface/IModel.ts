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

export interface IDisplayCat {
  _id: string;
  cat_ref: string;
  image: string;
}

export interface IPackageOrder {
  items: { id: string; qnt: number; seller: string }[];
  cost: number;
  total: number;
  vendor: string;
  group: number;
}

export interface IPackageModel {
  description: string;
  quantity: number;
  images: string[];
  date_added: string;
  sale_price: number;
  seller: string;
  status: number;
  name: string;
  _id: string;
  favorites: string[];
  likes: string[];
}

export interface IAdminComments {
  type: number;
  receipient: number;
  message: string;
  seen: string[];
  sender: string;
  date_added: string;
}
