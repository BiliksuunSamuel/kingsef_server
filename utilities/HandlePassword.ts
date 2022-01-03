import bcrypt from "bcrypt";

///HASH PASSWORD
export function HashPassword(password: string) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          reject(error);
        }
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

//VERIFY ACCOUNT PASSWORD
export function VerifyPassword(password: string, hpassword: string) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.compare(password, hpassword, (error, match) => {
        if (error) {
          reject(error);
        }
        resolve(match);
      });
    } catch (error) {
      reject(error);
    }
  });
}
