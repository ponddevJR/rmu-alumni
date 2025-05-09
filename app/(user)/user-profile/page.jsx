"use client";
import AlumniInfo from "@/components/user/profile/alumni-info";
import EditAlumniInfo from "@/components/user/profile/edit-alumni-info";
import AlumniWorksHistory from "@/components/user/profile/alumni-works-history";
import AlumniPrivacy from "@/components/user/profile/alumni-privacy";
import useProfilePageController from "@/controllers/user/profile.controller";
import SortMenuDialog from "@/components/ui/sortmenu-dialog";
import { FaEllipsis } from "react-icons/fa6";

const ProfilePage = () => {
  const { menuIndexActive, setMenuIndexActive } = useProfilePageController();

  return (
    <div className="relative w-full h-auto rounded-md shadow-md bg-white border border-gray-300 flex flex-col items-start p-5">
      {/* ปุ่มแสดงโปรไฟล์เมนูขนาดหน้าจออื่นๆ */}
      <div className="lg:hidden text-sm absolute top-1.5 right-1.5">
        <SortMenuDialog
          icon={<FaEllipsis />}
          menuItems={[
            { text: "โปรไฟล์", onClick: () => setMenuIndexActive(0) },
            { text: "แก้ไขโปรไฟล์", onClick: () => setMenuIndexActive(1) },
            { text: "ประวัติการทำงาน", onClick: () => setMenuIndexActive(2) },
            {
              text: "อนุญาตเผยแพร่",
              onClick: () => setMenuIndexActive(3),
            },
          ]}
        />
      </div>
      {/* โปรไฟล์เมนู */}
      <div className="bg-[var(--color-bg)] overflow-hidden rounded-tl-md hidden lg:flex lg:text-sm text-xs w-full border-b border-gray-300">
        {[
          "โปรไฟล์",
          "แก้ไขโปรไฟล์",
          "ประวัติการทำงาน",
          "อนุญาตเผยแพร่",
        ].map((menu, index) => (
          <button
            key={index}
            onClick={() => setMenuIndexActive(index)}
            className={`${
              menuIndexActive === index &&
              "border-b-2 border-[var(--color-primary)]"
            } p-3 hover:bg-[var(--color-secondary)]`}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* profile-components */}
      <div className="w-full h-fit">
        {menuIndexActive === 0 ? (
          // แสดงข้อมูลส่วนตัว
          <AlumniInfo />
        ) : menuIndexActive === 1 ? (
          // แก้ไขข้อมูลส่วนตัว
          <EditAlumniInfo />
        ) : menuIndexActive === 2 ? (
          // จัดการประวัติการทำงาน
          <AlumniWorksHistory />
        ) : (
          // การอนุญาตเผยแพร่ข้อมูล
          <AlumniPrivacy />
        )}
      </div>
    </div>
  );
};
export default ProfilePage;
