import Select from "@/components/ui/react-select";
import useCreateEditAlumniController from "@/controllers/admin/alumnies/create-edit-alumni.controller";
import { FaCheck } from "react-icons/fa6";

const CreateEditAlumniForm = ({ alumni }) => {
  const { years } = useCreateEditAlumniController();


  return (
    <>
      {/* เลือกคณะและสาขา */}
      <div className="flex gap-5 w-full">
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            คณะ <span className="text-red-500 text-xs">*</span>
          </label>
          <Select required className="" placeholder="เลือกคณะ" />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            สาขา <span className="text-red-500 text-xs">*</span>
          </label>
          <Select required className="" placeholder="เลือกสาขา" />
        </div>
      </div>
      {/* ปีที่เข้ารับการศึกษาและปีที่จบการศึกษา */}
      <div className="flex gap-5 w-full mt-4">
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            ปีที่เข้ารับการศึกษา <span className="text-red-500 text-xs">*</span>
          </label>
          <Select required options={years} className="" placeholder="ปี พ.ศ." />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            ปีที่จบการศึกษา <span className="text-red-500 text-xs">*</span>
          </label>
          <Select required className="" placeholder="ปี พ.ศ." />
        </div>
      </div>
      {/* รหัสนักศึกษา และ คำนำหน้า */}
      <div className="flex gap-5 w-full mt-4">
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            รหัสนักศึกษา <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            placeholder="รหัสนักศึกษา 12 หลัก"
            className="input-control-secondary mt-1"
            required
          />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            คำนำหน้า <span className="text-red-500 text-xs">*</span>
          </label>
          <select
            required
            name=""
            id=""
            className="input-control-secondary mt-1"
          >
            <option value="" disabled>
              -- เลือกคำนำหน้า --
            </option>
            <option value="">นาย</option>
            <option value="">นาง</option>
            <option value="">นางสาว</option>
          </select>
        </div>
      </div>
      {/* ชื่อ - นามสกุล */}
      <div className="flex gap-5 w-full mt-4">
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            ชื่อ <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            placeholder="สมชาย"
            className="input-control-secondary mt-1"
            required
          />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <label htmlFor="">
            นามสกุล <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            placeholder="รักเรียน"
            className="input-control-secondary mt-1"
            required
          />
        </div>
      </div>

      {/* ปุ่มบันทึก */}
      <button className="btn-primary mt-5">
        <FaCheck /> {alumni?.id ? "บันทึก" : "เพิ่มข้อมูล"}
      </button>
    </>
  );
};
export default CreateEditAlumniForm;
