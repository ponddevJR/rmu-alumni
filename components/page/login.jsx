"use client";
import {
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaKey,
  FaLine,
  FaUserSecret,
} from "react-icons/fa6";
import "@/styles/login.css";
import { FaIdCardAlt, FaSignInAlt } from "react-icons/fa";
import useLoginController from "@/controllers/page/login.controller";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const LoginComponents = ({ showSearchAlumnies }) => {
  const {
    showPassword,
    setIsSTDLogin,
    setShowPassword,
    isSTDLogin,
    handleInput,
    loginForm,
    isLoading,
    handleLogin,
  } = useLoginController();


  return (
    <>
    {isLoading && <div className="fixed top-0 left-0 w-full h-full z-50"></div>}
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
      <div
        className={`login-ctg-wrapper ${
          isSTDLogin ? "before:left-0" : "before:right-0"
        }`}
      >
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
      <form className="form" onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="" className="">
            {isSTDLogin ? <FaIdCard /> : <FaIdCardAlt />}
          </label>
          <input
            required
            type="text"
            placeholder={`รหัส${isSTDLogin ? "นักศึกษา" : "อาจารย์"}`}
            className="form-control"
            name="cardId"
            value={loginForm.cardId}
            onChange={handleInput}
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
            name="password"
            value={loginForm.password}
            onChange={handleInput}
          />
        </div>

        {/* ลืมรหัสผ่าน และ เข้าสู่ระบบ */}
        <div className="submit-wrapper">
          <div className="">
            <Link href="/" className="link">
              ลืมรหัสผ่าน?
            </Link>
            <label
              onClick={showSearchAlumnies}
              className={`${!isSTDLogin && "hidden"}`}
            >
              ตรวจสอบรายชื่อศิษย์เก่า
            </label>
          </div>

          <button className="btn-primary w-full">
            <FaSignInAlt /> {isLoading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
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
          <button
            title="สำหรับผู้ดูแลระบบ/เจ้าหน้าที่"
            className="text-[var(--color-text-main)]"
          >
            <FaUserSecret />
          </button>
        </div>
      </div>
    </>
  );
};
export default LoginComponents;
