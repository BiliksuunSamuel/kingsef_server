import OTP from "otp-client";

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
