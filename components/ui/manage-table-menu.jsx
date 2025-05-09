import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

// จัดการการแสดงหน้า
const ManageTableMenu = ({data}) => {
  return (
    <div className="w-full flex items-center justify-between mt-8 text-sm">
        {/* จำนวนข้อมูลที่พบ */}
        <div className="flex items-center gap-2">
            <p>จำนวนศิษย์เก่าที่พบในระบบ</p>
            <label htmlFor="">1</label>
            <p>คน</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary">
            <FaChevronLeft/>
          </button>
          <label htmlFor="">1</label>
          <button className="btn-primary">
            <FaChevronRight/>
          </button>
        </div>
    </div>
  )
}
export default ManageTableMenu