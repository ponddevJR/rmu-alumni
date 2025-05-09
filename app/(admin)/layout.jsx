
// Layout เจ้าหน้าที่/ผู้ดูแลระบบ
"use client";
import { AuthServices } from "@/services/auth";
import Sidebar from "../../components/ui/sidebar";
import "@/styles/sidebar.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChartSimple, FaGraduationCap, FaPeopleRoof, FaUsers } from "react-icons/fa6";
import Header from "@/components/ui/header";
import "../globals.css";
import Loading from "@/components/ui/loader";

const Layout = ({ children }) => {
  const redirect = useRouter();
  const [isLoading,setIsLoading] = useState(false);

  const [user,setUser] = useState(null);

  // ตรวจสอบการเข้าสู่ระบบ ใช่เจ้าหน้าที่หรือผู้ดูแลหรือไม่
  const checkLogin = async () => {
    setIsLoading(true);
    try {
      const res = await AuthServices.checkLogin();
      if(res.data.user.role === "admin"){
        setUser(res.data.user);
      }else{
        return redirect.push("/");
      }
    } catch (error) {
      console.error(error);
      redirect.push("/");
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

    // เมนู
    const menuItems = [
      { title: "Dashboard", icon: <FaChartSimple />, url: "dashboard" },
      { title: "จัดการข้อมูลศิษย์เก่า", icon: <FaUsers />, url: "alumnies" },
      {
        title: "จัดการบุคคลากรและอาจารย์",
        icon: <FaPeopleRoof />,
        url: "personels",
      },
      {
        title:"จัดการคณะ/หลักสูตร",icon:<FaGraduationCap/>,url:"course-management"
      }
    ];

  return (
    <>
    {isLoading && <Loading/>}
    <div className="w-screen overflow-x-hidden  h-screen flex justify-end bg-gradient-to-bl from-[var(--color-border)] to-[var(--color-bg)]">
      <Sidebar user={user} menuItems={menuItems}/>
      <main className="w-full overflow-y-auto mt-6 lg:w-4/5 lg:mt-0 flex flex-col h-full py-3 px-5">
        <Header user={user}/>
        {children}
      </main>
    </div>
    </>
    
  );
};
export default Layout;
