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

export interface ProductInfo {
  _id: string;
  approved: boolean;
  vendor_id: string;
  cost_price: number;
  selling_price: number;
  discount: number;
  description: string;
  quantity: number;
  date_added: string;
  name: string;
  category: string;
  images: string[];
}
export interface INewProductInfo {
  approved: boolean;
  vendor_id: string;
  cost_price: number;
  selling_price: number;
  discount: number;
  description: string;
  quantity: number;
  date_added: string;
  name: string;
  category: string;
  images: string[];
}
