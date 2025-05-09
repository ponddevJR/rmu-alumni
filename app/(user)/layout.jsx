
// ศิษย์เก่า / อาจารย์
"use client";
import {
  FaHandHoldingHeart,
  FaImagePortrait,
  FaNewspaper,
} from "react-icons/fa6";
import Sidebar from "../../components/ui/sidebar";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AuthServices } from "@/services/auth";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/header";

const Layout = ({ children }) => {
  const redirect = useRouter();

  const [user, setUser] = useState(null);
  // ตรวจสอบการเข้าสู่ระบบ
  const checkLogin = async () => {
    try {
      const res = await AuthServices.checkLogin();
      if (res?.data?.user?.role === "user") {
        setUser(res.data.user);
      } else {
        return redirect.push("/")
      }
    } catch (error) {
      console.error(error);
      redirect.push("/");
    }
  };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  const menuItems = [
    { title: "โปรไฟล์", icon: <FaImagePortrait />, url: "user-profile" },
    {
      title: "ค้นหาศิษย์เก่า/อาจารย์",
      icon: <FaSearch />,
      url: "user-search-alumnies",
    },
    { title: "ข่าวสารและประกาศ", icon: <FaNewspaper />, url: "user-news" },
    { title: "ร่วมบริจาค", icon: <FaHandHoldingHeart />, url: "user-donate" },
  ];

  return (
    <div className="w-screen overflow-x-hidden  h-screen flex justify-end bg-gradient-to-bl from-[var(--color-border)] to-[var(--color-bg)]">
      <Sidebar user={user} menuItems={menuItems} />
      <main className="w-full overflow-y-auto mt-6 md:w-4/5 md:mt-0 flex flex-col h-full py-3 px-5">
        <Header user={user}/>
        {children}
      </main>
    </div>
  );
};

export default Layout;
