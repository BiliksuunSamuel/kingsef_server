import moment from "moment";
import { IAuthInfo } from "../interface/IAuth";
import { INewProductInfo } from "../interface/IProduct";
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

export function PrepareNewProductInfo(info) {
  const Info: INewProductInfo = {
    name: info?.name,
    cost_price: info?.cost_price,
    selling_price: info?.selling_price,
    description: info?.description,
    discount: info?.discount,
    date_added: moment().format(),
    category: info?.category,
    quantity: info?.quantity,
    approved: info?.approved,
    vendor_id: info?.vendor_id,
    images: [],
  };
  return Info;
}
