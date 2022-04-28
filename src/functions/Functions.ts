import OTP from "otp-client";
import fs from "fs";

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
}

export function RemoveFileFromDir(path: string) {
  return new Promise(function (resolve, reject) {
    try {
      if (fs.existsSync("./src/public/" + path)) {
        fs.unlink("./src/public/" + path, (error) => {
          error && reject(error);
          resolve(true);
        });
      } else {
        resolve(true);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function WriteBase64File(base64Data: any, id: any) {
  return new Promise(function (resolve, reject) {
    try {
      const fname = id + Date.now().toString() + `.jpg`;
      fs.writeFile(
        "./src/public/products/" + fname,
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

export function WriteBase64FileChatImage(base64Data: any, id: any) {
  return new Promise(function (resolve, reject) {
    try {
      const fname = id + Date.now().toString() + `.jpg`;
      fs.writeFile(
        "./src/public/chat_media/" + fname,
        base64Data,
        "base64",
        function (error) {
          if (error) {
            reject(error);
          }
          resolve("chat_media/" + fname);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
