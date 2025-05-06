import { useEffect, useRef, useState } from "react";
import {FaCaretDown} from "react-icons/fa";

const SortMenuDialog = ({menuItems,icon = <FaCaretDown/>,title = "เรียงตาม" }) => {
    const [showSortDialog, setShowSortDialog] = useState(false);
    // จัดการการแสดงผลเมนูเรียงตาม
    const buttonRef = useRef(null); // ref for button to close dialog
    const menuRef = useRef(null);
    // ตรวจจับคลิกนอกเมนู
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          setShowSortDialog(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []); // ref for menu to close dialog
  
    return (
      <div className="relative inline-block">
      <button
        ref={buttonRef}
        className={`text-xs lg:text-[1rem] p-2 shadow-md shadow-gray-300 border border-gray-400 rounded-sm active:scale-90 ${
          showSortDialog ? "bg-blue-600 text-white" : ""
        }`}
        onClick={() => setShowSortDialog(!showSortDialog)}
        title={title}
      >
        {icon}
      </button>
      <div
        ref={menuRef}
        className={`transition-all duration-300 absolute top-full left-[-6rem] mt-2 bg-white border border-gray-300 shadow-md w-[150px] rounded-md overflow-hidden ${
          showSortDialog ? "z-10 opacity-100" : "z-[-1] opacity-0"
        }`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="p-2 px-5 bg-gray-900 text-white flex text-xs lg:text-sm w-full hover:bg-blue-600"
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
    )
}
export default SortMenuDialog