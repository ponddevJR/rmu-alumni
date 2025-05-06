import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import {
  FaBook,
  FaBriefcase,
  FaBuilding,
  FaBuildingCircleArrowRight,
  FaCalendar,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarDays,
  FaCity,
  FaEnvelope,
  FaFacebook,
  FaFileInvoice,
  FaLandmark,
  FaLayerGroup,
  FaLine,
  FaMapLocationDot,
  FaPhone,
  FaUserGraduate,
  FaVenusMars,
} from "react-icons/fa6";

const AlumniInfo = ({ alumni }) => {
  return (
    <div className="flex lg:flex-row flex-col w-full h-full pb-5">
      {/* left section */}
      <div className="w-full flex flex-col lg:h-full lg:w-1/3 lg:border-r border-gray-300">
        {/* รูปภาพ */}
        <div className="flex items-start gap-6 p-5">
          <Image
            alt="user-profile"
            src={alumni?.profileImage || "/assets/no_image.png"}
            width={100}
            height={100}
            className="rounded-lg w-[60px] h-[55px] lg:w-[70px] lg:h-[65px] border border-gray-400"
          />
          {/* ชื่อ - นามสกุล รหัสนักศึกษา */}
          <div className="flex flex-col items-start">
            <label htmlFor="" className="text-[0.9rem] lg:text-lg font-bold">
              นายปฐมพร วงสุวรรณ
            </label>
            <label htmlFor="" className="text-xs lg:text-sm text-gray-600">
              663170010324
            </label>
          </div>
        </div>

        {/* ข้อมูลการศึกษา */}
        <div className="pb-5 border-b border-gray-300 flex flex-col text-sm lg:text-[0.8rem] gap-3 px-5 mt-2">
          <label htmlFor="" className="font-bold lg:text-[1rem]">
            Education
          </label>
          {/* ระดับการศึกษา */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaLayerGroup />
            </p>
            <p className="text-gray-500">ระดับการศึกษา:</p>
            <p>ปริญญาตรี</p>
          </div>
          {/* คณะ */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaLandmark />
            </p>
            <p className="text-gray-500">คณะ:</p>
            <p>เทคโนโลยีสารสนเทศ</p>
          </div>
          {/* สาขา */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaBook />
            </p>
            <p className="text-gray-500">สาขาวิชา:</p>
            <p>เทคโนโลยีสารสนเทศ</p>
          </div>
          {/* ปีที่เข้ารับการศึกษา */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaCalendarCheck />
            </p>
            <p className="text-gray-500">ปีที่เข้ารับการศึกษา(พ.ศ.):</p>
            <p>2566</p>
          </div>
          {/* ปีที่จบการศึกษา */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaUserGraduate />
            </p>
            <p className="text-gray-500">ปีที่สำเร็จการศึกษา(พ.ศ.):</p>
            <p>2570</p>
          </div>
          {/* เกรดเฉลี่ยสะสม */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaFileInvoice />
            </p>
            <p className="text-gray-500">เกรดเฉลี่ยสะสม:</p>
            <p>3.96</p>
          </div>
        </div>

        {/* contact */}
        <div className="mt-3 pb-5 lg:border-none border-b border-gray-300 flex flex-col text-sm lg:text-[0.8rem] gap-3 px-5">
          <label htmlFor="" className="font-bold lg:text-[1rem]">
            Contact
          </label>
          {/* เบอร์โทรศัพท์ */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaPhone />
            </p>
            <p className="text-gray-500">เบอร์โทรศัพท์:</p>
            <p>096-585-0195 , 098-354-8920</p>
          </div>
          {/* อีเมล์ */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaEnvelope />
            </p>
            <p className="text-gray-500">อีเมล์:</p>
            <p>663170010324@rmu.ac.th</p>
          </div>
          {/* facebook */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaFacebook />
            </p>
            <p className="text-gray-500">Facebook:</p>
            <p>Pathomporn Wongsuwan</p>
          </div>
          {/* LineId */}
          <div className="flex items-center gap-2">
            <p className="text-[var(--color-primary)]">
              <FaLine />
            </p>
            <p className="text-gray-500">Line-Id:</p>
            <p>pond0947035487</p>
          </div>
        </div>
      </div>


      {/* right-section*/}
      <div className="w-full lg:w-3/4 lg:h-full p-3">
        {/* ข้อมูลส่วนตัวและที่อยู่ที่ติดต่อได้ */}
        <div className="w-full flex lg:flex-row flex-col-reverse text-sm lg:text-[0.8rem]">
          {/* ที่อยู่ที่ติดต่อได้ */}
          <div className="lg:w-1/2 lg:border-r lg:border-gray-300 mt-3 pb-5 lg:border-none border-b border-gray-300 flex flex-col text-sm lg:text-[0.8rem] gap-3 px-3">
            <label htmlFor="" className="font-bold lg:text-[1rem]">
            Contact Address
            </label>
            {/* ที่อยู่ */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaMapLocationDot />
              </p>
              <p className="text-gray-500">ที่อยู่:</p>
              <p>143 หมู่ 1 บ.ท่าสองคอน</p>
            </div>
            {/* จังหวัด*/}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaCity />
              </p>
              <p className="text-gray-500">จังหวัด:</p>
              <p>มหาสารคาม</p>
            </div>
            {/* อำเภอ */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaBuilding />
              </p>
              <p className="text-gray-500">อำเภอ:</p>
              <p>เมืองมหาสารคาม</p>
            </div>
            {/* ตำบล */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaBuildingCircleArrowRight />
              </p>
              <p className="text-gray-500">ตำบล:</p>
              <p>ท่าสองคอน</p>
            </div>
            {/* รหัสไปรษณีย์ */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaMailBulk />
              </p>
              <p className="text-gray-500">รหัสไปรษณีย์:</p>
              <p>44000</p>
            </div>
            
          </div>
          {/* ข้อมูลส่วนตัว */}
          <div className="lg:w-1/2 w-full  mt-3 pb-5 lg:border-none border-b border-gray-300 flex flex-col text-sm lg:text-[0.8rem] gap-3 px-3">
            <label htmlFor="" className="font-bold lg:text-[1rem]">
              About
            </label>
            {/* เบอร์โทรศัพท์ */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaVenusMars />
              </p>
              <p className="text-gray-500">เพศ:</p>
              <p>ชาย</p>
            </div>
            {/* อีเมล์ */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaCalendarDays />
              </p>
              <p className="text-gray-500">วันเกิด:</p>
              <p>09/12/2547</p>
            </div>
            {/* facebook */}
            <div className="flex items-center gap-2">
              <p className="text-[var(--color-primary)]">
                <FaBriefcase />
              </p>
              <p className="text-gray-500">สถานภาพการทำงาน:</p>
              <p className={`transition-all cursor-pointer hover:shadow-md hover:shadow-gray-300 flex items-center gap-1.5 p-1 px-2 rounded-md ${alumni?.currentStatus ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${alumni?.currentStatus ? "bg-green-500" : "bg-red-500"}`}></span>
                {alumni?.currentStatus ? "มีงานทำ" : "ว่างงาน"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlumniInfo;
