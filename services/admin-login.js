import axios from "axios";
export const AdminLoginServices = {
    // เข้าสู่ระบบโดยผู้ดูแลระบบ
  loginAdmin: async (payload) => {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login-admin`,
      payload,
      { withCredentials: true }
    );
  },
};
