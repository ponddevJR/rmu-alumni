import { AlertDialog } from "@/functions/alert-dialog";
import { useState } from "react";
import {AuthServices}from "@/services/auth";
import { useRouter } from "next/navigation";

export default function useLoginController() {

  const redirect = useRouter();

  // จัดการ การLoading
  const [isLoading,setIsLoading] = useState(false);

  // ซ่อน/แสดงรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);
  // รูปแบบการเข้าสู่รระบบ
  const [isSTDLogin, setIsSTDLogin] = useState(true);

  // เก็บค่าจาก form login
  const [loginForm, setLoginForm] = useState({
    cardId: "",
    password: "",
  });

  // รับค่าจาก input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ส่งคำขอ Loginไปหลังบ้าน
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await AuthServices.login({
        cardId:loginForm.cardId,
        password:loginForm.password,
        // เช็คว่าการเข้าสู่ระบบเป็นใคร
        isStd:isSTDLogin
      });
      // error 400
      if(res.data.err){
        AlertDialog.serverError(res.data.err);
        return;
      }

      AlertDialog.successDialog("เข้าสู่ระบบสำเร็จ");
      redirect.push("/dashboard");

    } catch (error) {
      console.error(error);
      AlertDialog.serverError();
    }finally{
      setIsLoading(false);
    }
  };

  // ตรวจสอบการ Login
  const checkLogin = async () => {
    try {
      const res = await AuthServices.checkLogin();
      if(res.data.user){
        return redirect.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      AlertDialog.serverError();
    }
  }

  return {
    showPassword,
    setIsSTDLogin,
    setShowPassword,
    isSTDLogin,
    loginForm,
    handleInput,
    handleLogin,
    isLoading,
    checkLogin
  };
}
