"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaChartSimple, FaPeopleRoof, FaUsers, FaX } from "react-icons/fa6";
import SidebarSystemMenu from "@/components/ui/sidebar-system-menus";

const Sidebar = () => {
  // แสดงผลเมนูในขนาดหน้าจออื่นๆ
  const [isOpen, setIsOpen] = useState(false);
  // ตรวจสอบ URL
  const url = usePathname();
  const pathName = url.split("/")[1];

  // เมนู
  const menuItems = [
    { title: "Dashboard", icon: <FaChartSimple />, url: "dashboard" },
    { title: "จัดการข้อมูลศิษย์เก่า", icon: <FaUsers />, url: "alumnies" },
    { title: "จัดการบุคคลากรและอาจารย์", icon: <FaPeopleRoof />, url: "personels" }
  ];


  return (
    <>
      {/* จัดการการแสดงผลเมนู */}
      <button onClick={() => setIsOpen(!isOpen)} className="btn-responsive">
        {isOpen ? <FaX /> : <FaBars />}
      </button>
      {/* Sidebar */}
      <aside
        className={`
            aside ${
              isOpen ? "translate-x-0 z-10" : "z-[-1] translate-x-[-50rem]"
            }
          `}
      >
        {/* logo */}
        <div className="logo-wrapper">
          <Image
            alt="rmu-logo"
            src="/assets/logo_rmu.png"
            width={80}
            height={80}
            priority
            className="logo"
          />

          <div className="text-wrap">
            <label htmlFor="">ระบบศิษย์เก่า</label>
            <label htmlFor="">มหาวิทยาลัยราชภัฏมหาสารคาม</label>
          </div>
        </div>

        {/* เมนูหลัก */}
        <label htmlFor="" className="w-full mt-3 text-sm text-gray-600">
          เมนูหลัก
        </label>
        <div className="menu-wrapper">
          {menuItems.map((menu, index) => {
            return (
              <Link
                key={index}
                href={`/${menu.url}`}
                onClick={() => setIsOpen(false)}
                className={`menu-items ${
                  pathName === menu.url ? "text-[var(--color-text-main)] shadow-sm border border-[var(--color-border)]" : ""
                }`}
              >
                {menu.icon} {menu.title}
              </Link>
            );
          })}
        </div>

        {/* เมนูระบบ */}
        <SidebarSystemMenu
          pathName={pathName}
          closeMenu={() => setIsOpen(false)}
        />
      </aside>
    </>
  );
};

export default Sidebar;
