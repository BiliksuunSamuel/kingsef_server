export interface IProductImage {
  path: string;
}
export interface IProductInfo {
  images: IProductImage[];
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  vendor_id: string;
  status: number;
  id: string;
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
