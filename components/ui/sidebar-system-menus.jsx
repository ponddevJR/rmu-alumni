import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaGear, FaRightFromBracket } from "react-icons/fa6";

const SidebarSystemMenu = ({ currentUser, pathName,closeMenu }) => {
  const menuItems = [
    { title: "บัญชีของฉัน", icon: <FaUserAlt />, url: "profile" },
    { title: "ตั้งค่า", icon: <FaGear />, url: "setting" },
  ];

  return (
    <>
      <label htmlFor="" className="w-full mt-3 text-sm text-gray-600">
        ระบบ
      </label>
      <div className="menu-wrapper">
        {menuItems.map((menu, index) => {
          return (
            <Link
              key={index}
              href={`/${menu.url}`}
              onClick={closeMenu}
              className={`menu-items ${
                pathName === menu.url ? "text-[var(--color-text-main)] shadow-sm border border-[var(--color-border)]" : ""
              }`}
            >
              {menu.icon} {menu.title}
            </Link>
          );
        })}
        <button className="btn-danger">
            <FaRightFromBracket/> ออกจากระบบ
        </button>
      </div>
    </>
  );
};
export default SidebarSystemMenu;
