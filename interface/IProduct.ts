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
  id: string;
}

export interface IProductInfo {
  approved: boolean;
  vendor_id: string;
  regular_price: number;
  sales_price: number;
  discount: number;
  description: string;
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
  estimated_delivery: { start: string; duration: number };
  brands?: string;
  variable: { id: string; title: string; value: string }[];
  merit: number;
}

export interface INewProductInfo {
  p_id: string;
  approved: boolean;
  vendor_id: string;
  regular_price: number;
  sales_price: number;
  discount: number;
  description: string;
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
  estimated_delivery: { start: string; duration: number };
  brands?: string;
  variable: { id: string; title: string; value: string }[];
}
