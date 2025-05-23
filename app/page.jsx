// เข้าสู่ระบบสำหรับศิษย์เก่า นักศึกษาและอาจารย์
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "@/components/page/login";
import AlumniesSearch from "@/components/page/alumnies-search.jsx";
import { AuthServices } from "@/services/auth";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loader";

const FirstPage = () => {
  const redirect = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // แสดงผล dialog
  const [showDialog, setShowDialog] = useState(false);
  // แสดง components ค้นหารายชื่อศิษย์เก่า
  const [searchAlumnies, setSearchAlumnies] = useState(false);

  // ตรวจสอบการ Login
  const checkLogin = async () => {
    setIsLoading(true);
    try {
      const res = await AuthServices.checkLogin();
      const role = res.data.user.role;
      if (role === "user") {
        return redirect.push("/user-profile");
      } else {
        return redirect.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // เซ็ตเวลาแสดงผล dialog ให้แสดงวิดีโอก่อน
  useEffect(() => {
    checkLogin();
    const timeout = setInterval(() => {
      setShowDialog(true);
    }, 3500);

    if (showDialog) return clearInterval(timeout);
    return () => clearInterval(timeout); // <-- คืนฟังก์ชันนี้เพื่อ cleanup
  }, [showDialog]);

  return (
    <>
    {isLoading && <Loading/>}
      <div className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-tl from-[var(--color-secondary)] to-[var(--color-bg)] overflow-hidden">
        <video
          className={`fixed top-0 left-0 lg:w-full  h-full object-cover transition-all duration-800`}
          src="/assets/rmu_vdo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            showDialog && "bg-black/20 backdrop-blur-xs backdrop-saturate-50"
          } z-10 transition-all duration-500`}
        />

        <div
          className={`
        ${showDialog ? "opacity-100  z-50" : "z-[-1] opacity-0"}
        transition-all duration-800 
        px-8 py-6 rounded-md shadow-lg shadow-gray-700 
        flex gap-5 
        bg-white
        border-b border-white/30  w-7/8 lg:w-1/2
      `}
        >
          <div className="flex flex-col w-full  h-full items-start">
            {/* header */}
            <div className="w-full flex gap-2 items-center border-b pb-3 border-[var(--color-secondary)]">
              {/* logo */}
              <Image
                alt="rmu-logo"
                src="/assets/logo_rmu.png"
                width={100}
                height={100}
                priority
                className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-xl lg:text-3xl font-bold text-[var(--color-text-main)]"
                >
                  RMU ALUMNI
                </label>
                <label htmlFor="" className="text-[0.9rem] lg:text-lg">
                  ระบบศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคาม
                </label>
              </div>
            </div>

            {searchAlumnies ? (
              <AlumniesSearch showLogin={() => setSearchAlumnies(false)} />
            ) : (
              <Login showSearchAlumnies={() => setSearchAlumnies(true)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
