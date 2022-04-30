import { v4 as uuidv4 } from "uuid";

export function UploadWebFile(file: any) {
  return new Promise(function (resolve, reject) {
    try {
      const filename: string = file.name;
      const filetype: string = filename.split(".")[1];
      const nameid: string = uuidv4().toString();
      const filepath = "./src/public/products/" + `${nameid}.${filetype}`;
      file.mv(filepath, (error) => {
        error && reject(error);
        resolve("products/" + nameid + "." + filetype);
      });
    } catch (error) {
      reject(error);
    }
  });
}
