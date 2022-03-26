import OTP from "otp-client";
import fs from "fs";
import path, { dirname } from "path";

export function GenerateOTP(): string {
  const secret = "TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY";
  const options = {
    algorithm: "sha256",
    digits: 6,
    period: 20,
  };
  const otp = new OTP(secret, options);
  const token = otp.getToken(); // e.g. 74837433
  return token;
  // return OTP.generate(6, {
  //   upperCaseAlphabets: false,
  //   specialChars: false,
  //   digits: true,
  // });
}

export function WriteBase64File(base64Data: any, id: any) {
  return new Promise(function (resolve, reject) {
    try {
      const fname = id + Date.now().toString() + `.jpg`;
      fs.writeFile(
        dirname("./public") + "/products/" + fname,
        base64Data,
        "base64",
        function (error) {
          if (error) {
            reject(error);
          }
          resolve("products/" + fname);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
