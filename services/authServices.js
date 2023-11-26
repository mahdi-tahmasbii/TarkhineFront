import http from "./httpService";

export function getOtp(phoneNumber) {
  return http.post("/accounts/api/SendOTPcodes/", { phoneNumber });
}

export function checkOtp(phone_number, OTPcode) {
  return http.post("/accounts/api/users/", phone_number, OTPcode);
}
