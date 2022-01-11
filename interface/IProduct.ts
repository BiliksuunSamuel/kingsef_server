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
