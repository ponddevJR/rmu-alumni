"use client";
import {
  FaArrowRightFromBracket,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaKey,
  FaLine,
  FaUserSecret,
} from "react-icons/fa6";
import "@/styles/login.css";
import { FaIdCardAlt, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginComponents = ({showSearchAlumnies}) => {
  // ซ่อน/แสดงรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);
  // รูปแบบการเข้าสู่รระบบ
  const [isSTDLogin, setIsSTDLogin] = useState(true);

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

      {/* เลือกประเภทการล็อกอิน */}
      <div className={`login-ctg-wrapper ${isSTDLogin ? "before:left-0" : "before:right-0"}`}>
        <button
          onClick={() => setIsSTDLogin(true)}
          className={`${isSTDLogin ? "bg-[var(--color-bg)]" : ""}`}
        >
          ศิษย์เก่า/นักศึกษา
        </button>
        <button
          onClick={() => setIsSTDLogin(false)}
          className={`${!isSTDLogin ? "bg-[var(--color-bg)]" : ""}`}
        >
          อาจารย์
        </button>
      </div>

      {/* username รหัสนักศึกษา */}
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="" className="">
           {isSTDLogin ? <FaIdCard/> : <FaIdCardAlt/>}
          </label>
          <input
            required
            type="text"
            placeholder={`รหัส${isSTDLogin ? "นักศึกษา" : "อาจารย์"}`}
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
            <label onClick={showSearchAlumnies} className={`${!isSTDLogin && "hidden"}`}>ตรวจสอบรายชื่อศิษย์เก่า</label>
          </div>

          <button className="btn-primary w-full">
            <FaSignInAlt /> เข้าสู่ระบบ
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
          {/* <button className="">
            <FaGithub />
          </button> */}
          <button title="สำหรับผู้ดูแลระบบ/เจ้าหน้าที่" className="text-[var(--color-text-main)]">
            <FaUserSecret/>
          </button>
        </div>
      </div>
    </>
  );
};
export default LoginComponents;
