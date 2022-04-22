import { cloudinary_configuration } from "../configuration/Config";
import { v2 as cloudinary } from "cloudinary";

export function HandleFileUpload(data: string) {
  return new Promise(function (resolve, reject) {
    try {
      cloudinary.uploader.upload(data, (error, response) => {
        error && reject(error);
        resolve(response);
      });
    } catch (error) {
      reject(error);
    }
  });
}
