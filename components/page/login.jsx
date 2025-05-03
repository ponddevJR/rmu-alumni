"use client";
import {
  FaArrowRightFromBracket,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaIdCard,
  FaKey,
  FaKeybase,
  FaLine,
  FaUser,
} from "react-icons/fa6";
import "@/styles/login.css";
import { FaIdCardAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginComponents = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* greeting user */}
      <div className="greeting-wrapper">
        <label htmlFor="" className="text-3xl lg:text-4xl">
          Hello,{" "}
        </label>
        <label htmlFor="" className="">
          welcome!
        </label>
      </div>
      <label htmlFor="" className="text-sm lg:text-[1rem] mt-2 text-gray-500">
        เข้าสู่ระบบเพื่อใช้งาน
      </label>

      {/* username รหัสนักศึกษา */}
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="" className="">
            <FaIdCardAlt />
          </label>
          <input
            required
            type="text"
            placeholder="รหัสนักศึกษา"
            className="form-control"
          />
        </div>

        <div className="input-wrapper relative">
          <label htmlFor="" className="">
            <FaKey />
          </label>
          {/* แสดงและไม่แสดงรหัสผ่าน */}
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="รหัสผ่าน"
            className="form-control"
          />
        </div>

        {/* ลืมรหัสผ่าน และ เข้าสู่ระบบ */}
        <div className="submit-wrapper">
          <div className="">
            <Link href="/" className="link">
              ลืมรหัสผ่าน?
            </Link>
            <button className="">ตรวจสอบรายชื่อศิษย์เก่า</button>
          </div>

          <button className="btn-primary lg:w-2/3 w-full">
            <FaArrowRightFromBracket /> เข้าสู่ระบบ
          </button>
        </div>
      </form>

      {/* เข้าสู่ระบบด้วยช่องทางอื่น */}
      <div className="other-login-wrapper">
        <label htmlFor="" className="">
          เข้าสู่ระบบด้วยช่องทางอื่น
        </label>
        <div className="">
          <button className="text-green-500">
            <FaLine />
          </button>
          <button>
            <Image
              alt="google-logo"
              src="/assets/google_logo.png"
              width={22}
              height={22}
              priority
              className="lg:w-[30px] lg:h-[30px] w-[22px] h-[22px]"
            />
          </button>
          <button className="">
            <FaGithub />
          </button>
        </div>
      </div>
    </>
  );
};
export default LoginComponents;
