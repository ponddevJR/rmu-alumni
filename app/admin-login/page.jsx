"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash, FaLock, FaUserSecret } from "react-icons/fa6";
import useAdminLoginController from "@/controllers/admin-login.controller";
import { useEffect } from "react";

const AdminLogin = () => {
  const { isLoading, loginAdmin, loginForm, setLoginForm,setShowPassword,showPassword ,checkAdminLogin} =
  useAdminLoginController();
  
  useEffect(() => {checkAdminLogin()},[]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tl from-[var(--color-secondary)] to-[var(--color-bg)]">
      <div className="border border-[var(--color-primary)] lg:w-1/3 w-4/5 flex flex-col p-5 rounded-lg shadow-md shadow-gray-400 bg-white">
        {/* logo */}
        <div className="w-full p-3 flex flex-col items-center justify-center">
          {/* image */}
          <Image
            alt="rmu-logo"
            src="/assets/logo_rmu.png"
            width={100}
            height={100}
            priority
            className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
          />

          <label
            htmlFor=""
            className="font-bold mt-2 text-lg lg:text-xl  text-[var(--color-text-main)]"
          >
            ระบบศิษย์เก่า
          </label>
          <label htmlFor="" className="text-lg lg:text-xl">
            มหาวิทยาลัยราชภัฏมหาสารคาม
          </label>
        </div>

        <label htmlFor="" className="text-[var(--color-primary)] text-xl mt-1">
          เข้าสู่ระบบสำหรับเจ้าหน้าที่
        </label>
        <label htmlFor="" className="text-xs lg:text-sm text-gray-600 mt-1">
          กรอกชื่อผู้ใช้งานหรืออีเมล์และรหัสผ่าน เพื่อเข้าใช้งานระบบ
        </label>

        {/* ฟอร์มเข้าสู่ระบบ */}
        <form onSubmit={loginAdmin} className="w-full flex flex-col mt-5">
          <label htmlFor="" className="flex items-center gap-2 text-lg">
            <FaUserSecret className="text-[var(--color-text-main)]" />
            <span>Username</span>
          </label>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้งานหรืออีเมล์"
            className="mt-2 form-control text-md"
            name="username"
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />

          <div className="flex flex-col relative">
            <label htmlFor="" className="flex items-center gap-2 text-lg mt-5">
              <FaLock className="text-[var(--color-text-main)]" />
              <span>Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              className="mt-2 form-control text-md"
              name="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-5 right-0 p-2 cursor-pointer">
              {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </span>
          </div>

          <div className="flex w-full items-center justify-between mt-5">
            <Link
              href="#"
              htmlFor=""
              className="text-sm lg:text-mt text-gray-700 hover:text-[var(--color-text-main)] hover:underline"
            >
              ลืมรหัสผ่าน?
            </Link>

            {/* เข้าสู่ระบบ */}
            <button disabled={isLoading} className="px-4 py-2 flex gap-2 items-center rounded-md shadow-md bg-[var(--color-primary)] text-[var(--color-text-normal)] hover:bg-[var(--color-text-main)] hover:px-6 hover:shadow-gray-400">
              <FaSignInAlt /> {isLoading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;
