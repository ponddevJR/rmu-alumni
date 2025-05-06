import { useState } from "react";
import { AdminLoginServices } from "../services/admin-login";
import { AlertDialog } from "@/functions/alert-dialog";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth";
export default function useAdminLoginController() {
  const redirect = useRouter();

  // จัดการการโหลด
  const [isLoading, setIsLoading] = useState(false);

  // แสดง/ซ่อน รหัสผ่าน
  const [showPassword, setShowPassword] = useState();

  // เก็บค่า username และ password
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // เข้าสู่ระบบ
  const loginAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await AdminLoginServices.loginAdmin({ ...loginForm });
      if (res.data.err) {
        return AlertDialog.serverError(res.data.err);
      }

      const admin = res.data.user;
      if (admin.role !== "admin") {
        return AlertDialog.serverError("ข้อมูลไม่ถูกต้อง");
      }

      redirect.push("/dashboard");
      AlertDialog.successDialog("เข้าสู่ระบบแล้ว");
    } catch (error) {
      console.error(error);
      AlertDialog.serverError();
    } finally {
      setIsLoading(false);
    }
  };

  // checkAdmidLogin
  const checkAdminLogin = async () => {
    try {
      const res = await AuthServices.checkLogin();
      if (res.data.user.role === "admin") {
        redirect.push("/dashboard");
      }else{
        redirect.push("/")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isLoading,
    loginAdmin,
    loginForm,
    setLoginForm,
    showPassword,
    setShowPassword,
    checkAdminLogin
  };
}
