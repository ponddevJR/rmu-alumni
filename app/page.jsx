"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "@/components/page/login"

const FirstPage = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      setShowDialog(true);
    }, 5000);

    if (showDialog) return clearInterval(timeout);

    return () => clearInterval(timeout); // <-- คืนฟังก์ชันนี้เพื่อ cleanup
  }, [showDialog]);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-tl from-[var(--color-secondary)] to-[var(--color-bg)]">
      <video
        className={`fixed top-0 left-0 lg:w-full  h-full object-cover transition-all duration-800`}
        src="/assets/rmu_vdo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${showDialog && "bg-black/20 backdrop-blur-xs backdrop-saturate-50"} z-10 transition-all duration-500`}
      />

      {/* พื้นหลังกระจก */}
      <div
        className={`
        ${showDialog ? "opacity-100  z-50" : "z-[-1] opacity-0"}
        transition-all duration-800 
        p-8 rounded-md shadow-lg shadow-gray-700 
        flex flex-col ld:flex-row gap-1 
        bg-white
        border-b border-white/30  w-4/5 lg:2/3
      `}
      >
        <div className="flex flex-col w-full h-full items-start lg:w-2/3">
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
              <label htmlFor="" className="text-xl lg:text-3xl font-bold text-[var(--color-text-main)]">RMU ALUMNI</label>
              <label htmlFor="" className="text-[0.9rem] lg:text-lg">ระบบศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคาม</label>
            </div>
          </div>

          <Login/>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
