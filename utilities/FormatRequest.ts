import { IAuthInfo } from "../interface/IAuth";
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
