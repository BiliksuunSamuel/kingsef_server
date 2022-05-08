export interface IProductImage {
  path: string;
}

export interface IProductCategory {
  title: string;
  description: string;
  sub_cate: ISubCategory[];
  _id: string;
}

export interface ISubCategory {
  title: string;
  id: any;
  value: any;
}

export interface IProductInfo {
  status: { approved: boolean; declined: boolean; processed: number };
  vendor_id: string;
  regular_price: number;
  sales_price: number;
  discount: number;
  description: { id: any; value: string }[];
  quantity: number;
  date_added: string;
  name: string;
  category: string;
  up_sells: string;
  gallery: string[];
  image: string;
  cross_sells: string;
  type: string;
  seo: string;
  estimated_delivery: { start: string; end: string };
  brands: string;
  variable: { id: string; value: string }[];
  merit: number;
  country_code: string;
  favorites: string[];
  available: boolean;
  details_listing: { id: string; value: any }[];
  currency: string;
  country_info: any;
  sub_category: string;
  search_keyword: string;
  ispackaging: boolean;
}

export interface INewProductInfo {
  p_id: string;
  approved: boolean;
  vendor_id: string;
  regular_price: number;
  sales_price: number;
  discount: number;
  description: { id: any; value: string }[];
  quantity: number;
  date_added: string;
  name: string;
  category: string;
  shipping_class: number;
  up_sells: string;
  gallery: any[];
  image: any | null;
  cross_sells: string;
  type: any;
  seo: string;
  estimated_delivery: { start: string; end: string };
  brands: string;
  variable: { id: string; value: string }[];
  country_code: string;
  details_listing: { id: string; value: any }[];
  currency: string;
  country_info: any;
  sub_category: string;
  search_keyword: string;
  ispackaging: boolean;
}
