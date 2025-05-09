import Select from "@/components/ui/react-select";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import {
  FaBuilding,
  FaBuildingCircleArrowRight,
  FaCheck,
  FaCity,
  FaEnvelope,
  FaFacebook,
  FaLine,
  FaMapLocationDot,
  FaPhone,
  FaRotateRight,
  FaTrash,
  FaUpload,
} from "react-icons/fa6";
import useUserEditProfileController from "../../../controllers/user/edit-profile.controller";

const EditAlumniInfo = ({ alumni }) => {
  const { handleImageInput, previewProfile, setPreviewProfile } =
    useUserEditProfileController();

  return (
    <div className="text-[0.9rem] mt-5 w-full grid grids-cols-1 lg:grid-cols-2 gap-10 gap-y-5">
      {/* รูปภาพ */}
      <div className="border-b lg:border-b-0 pb-10 lg:pb-0 lg:border-r border-gray-300 flex flex-col gap-1">
        <p className="font-bold text-sm lg:text-[1rem]">
          Profile{" "}
          <span className="font-normal text-gray-600">(รูปโปรไฟล์)</span>
        </p>
        <div className="flex flex-col items-center gap-3 ml-2 mt-2">
          <div className="w-[150px] h-[120px] border border-gray-300 rounded-md overflow-hidden">
            <Image
              alt="user-profile"
              src={
                previewProfile !== "" ? previewProfile : "/assets/no_image.png"
              }
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              onChange={handleImageInput}
              type="file"
              className="hidden"
              id="img-input"
            />
            <div className="flex items-center gap-2">
              <label
                htmlFor="img-input"
                className="transition-all btn-primary cursor-pointer"
              >
                <FaUpload /> {previewProfile ? "เปลี่ยนรูป" : "อัปโหลด"}
              </label>
              {previewProfile !== "" && (
                <button
                  onClick={() => setPreviewProfile("")}
                  className="btn-danger"
                >
                  <FaTrash /> ลบรูป
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ช่องทางติดต่อ */}
      <div className="flex flex-col items-center lg:items-start pb-8 lg:pb-0">
        <p className="w-full font-bold text-sm lg:text-[1rem]">
          Contact{" "}
          <span className="font-normal text-gray-600">(ช่องทางติดต่อ)</span>
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* อีเมล์ */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaEnvelope />
            </label>
            <input type="text" className="input-control-secondary w-[250px]" />
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaEnvelope />
            </label>
            <input
              type="text"
              className="input-control-secondary"
              placeholder="อีเมล์ที่สามารถติดต่อได้"
            />
          </div>
          {/* เบอร์โทรศัพท์ */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaPhone />
            </label>
            <input type="tel" className="input-control-secondary w-[250px]" />
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaPhone />
            </label>
            <input
              type="tel"
              className="input-control-secondary"
              placeholder="เบอร์ที่สามารถติดต่อได้"
            />
          </div>
        </div>
        {/* Facebook */}
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-col mt-1">
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaFacebook />
            </label>
            <input
              type="text"
              className="input-control-secondary w-[250px] mt-1"
              placeholder="เฟสบุ๊ค"
            />
          </div>
          {/* Line-Id */}
          <div className="flex flex-col mt-1">
            <label
              htmlFor=""
              className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
            >
              <FaLine />
            </label>
            <input
              type="text"
              className="input-control-secondary w-[250px] mt-1"
              placeholder="ไลน์ไอดี"
            />
          </div>
        </div>
      </div>
      {/* ที่อยู่ที่สามารถติดต่อได้ */}
      <div className="flex flex-col items-center lg:items-start lg:mt-5 w-full pt-8 border-t border-gray-300 lg:col-span-2">
        <p className="w-full font-bold text-sm lg:text-[1rem]">
          Contact Address{" "}
          <span className="font-normal text-gray-600">
            (ที่อยู่ที่สามารถติดต่อได้)
          </span>
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* ที่อยู่ */}
          <div className="flex flex-col mt-3">
            <p className="text-[var(--color-primary)]">
              <FaMapLocationDot />
            </p>
            <textarea
              name=""
              className="w-[250px] h-[120px] input-control-secondary mt-1 resize-none"
              id=""
              placeholder="รายละเอียดที่อยู่"
            ></textarea>
          </div>
          {/* จังหวัด อำเภอ ตำบล รหัสไปรษณีย์ */}
          <div className="grid lg:grid-cols-2 lg:gap-10 mt-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
              >
                <FaCity />
              </label>
              <Select className="w-[250px]" placeholder="เลือกจังหวัด" />
              <label
                htmlFor=""
                className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
              >
                <FaBuilding />
              </label>
              <Select placeholder="เลือกอำเภอ" />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
              >
                <FaBuildingCircleArrowRight />
              </label>
              <Select placeholder="เลือกจังหวัด" />
              <label
                htmlFor=""
                className="text-[var(--color-primary)] mt-2 flex items-center gap-1"
              >
                <FaMailBulk />
              </label>
              <input
                type="text"
                placeholder="รหัสไปรษณีย์"
                className="input-control-secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      {/* ปุ่ม */}
      <div className="w-full flex items-center justify-end gap-3 mt-1 pb-5">
        <button className="btn-primary">
          <FaCheck /> บันทึก
        </button>
        <button className="btn-danger">
          <FaRotateRight /> ล้างข้อมูล
        </button>
      </div>
    </div>
  );
};
export default EditAlumniInfo;
