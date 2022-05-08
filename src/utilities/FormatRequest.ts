import moment from "moment";
import { IAuthInfo } from "../interface/IAuth";
import { INewProductInfo, IProductInfo } from "../interface/IProduct";
import { IUserInfo } from "../interface/IUser";
import { IVerificationInfo } from "../interface/IVerification";
import { GetMoment } from "./Utils";

///PREPARE USER ACCOUNT INFO
export function PropareUserAccountInfo(info: any) {
  const Info: IUserInfo = {
    firstname: info?.firstname,
    lastname: info?.lastname,
    email: info?.email,
    country: info?.country,
    state: info?.state,
    status: 1,
    verification_id: "",
    id: "",
    auth_id: "",
    authenticated: false,
  };
  return Info;
}

///PREPARE AUTHENTICATION DETAILS
export function PrepareAuthInfo(info: any) {
  const Info: IAuthInfo = {
    email: info?.email,
    password: info?.password,
  };
  return Info;
}

///PREPARE VERIFICATION DETAILS
export function PrepareVerificationInfo(info: any) {
  const Info: IVerificationInfo = {
    verification_code: info?.verification_code,
    verified: false,
    user_id: "",
    code_time: GetMoment(),
  };
  return Info;
}

export function PrepareNewProductInfo(
  info: INewProductInfo,
  image: string,
  gallery: string[]
) {
  const Info: IProductInfo = {
    name: info?.name,
    sales_price: info.sales_price,
    regular_price: info.regular_price,
    description: info?.description,
    discount: info?.discount,
    date_added: moment().format(),
    category: info?.category,
    quantity: info?.quantity,
    status: { approved: false, processed: 0, declined: false },
    vendor_id: info?.vendor_id,
    image,
    gallery,
    seo: info.seo,
    cross_sells: info.cross_sells,
    estimated_delivery: info.estimated_delivery,
    variable: info.variable,
    up_sells: info.up_sells,
    merit: 0,
    type: info.type,
    country_code: info?.country_code,
    favorites: [],
    available: true,
    details_listing: info.details_listing,
    currency: info.currency,
    country_info: info.country_info,
    sub_category: info.sub_category,
    search_keyword: info.search_keyword,
    ispackaging: info.ispackaging,
    brands: info.brands,
  };
  return Info;
}
