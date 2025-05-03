import axios from "axios";

export const AuthServices = {
  // เข้าสู่ระบบ
  login: async (payload) => {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      payload,
      { withCredentials: true }
    );
  },
  //   ตรวจสอบการเข้าสู่ระบบ
  checkLogin: async () => {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/check-login`,
      { withCredentials: true }
    );
  },
};
