"use client";
import TopPageMenu from "@/components/ui/top-page-menu";
import Dialog from "@/components/ui/dialog";
import useAlumniesController from "@/controllers/admin/alumnies/alumnies.controller";
import CreateEditAlumniForm from "../../../components/admin/create-edit-alumni-form";
import Table from "@/components/ui/table";
import {
  FaArrowUp,
  FaEye,
  FaPaperPlane,
  FaPen,
  FaRotate,
  FaRotateRight,
  FaSort,
} from "react-icons/fa6";
import ManageTableMenu from "@/components/ui/manage-table-menu";
import SortMenuDialog from "@/components/ui/sortmenu-dialog";
import useFacultyAndCourse from "@/functions/faculty-course";
import { useEffect } from "react";
import Select from "@/components/ui/react-select";
import { years } from "@/functions/year-select";
import BtnPrimary from "@/components/ui/btn-primary";
import { FaEllipsisH, FaSearch } from "react-icons/fa";
import AlumniInfo from "@/components/user/profile/alumni-info";

const AlumniesPage = () => {
  const {
    setCreateEditAlumniesForm,
    showCreateEditAlumniesForm,
    setShowSearchFilter,
    showSearchFilter,
    activeAlumni,
    setActiveAlumni,
    setShowAlumniInfo,
    showAlumniInfo,
    handleShowAlumniInfo,
  } = useAlumniesController();

  // ดึงข้อมูลคณะและระดับการศึกษา
  const { getFaculties, faculties, educationLevelList, getEducationLevelList } =
    useFacultyAndCourse();
  useEffect(() => {
    getFaculties();
    getEducationLevelList();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-md shadow-md border border-[var(--color-border)] p-3">
      <p className="pb-2 border-b border-[var(--color-border)] mb-3 text-lg lg:text-xl w-full ">
        จัดการข้อมูลศิษย์เก่า
      </p>
      {/* เมนูด้านบน */}
      <TopPageMenu
        setShowCreateDialog={() => setCreateEditAlumniesForm(true)}
        setShowFilterDialog={() => setShowSearchFilter(true)}
        createDialogTitle={"เพิ่มรายชื่อศิษย์เก่า"}
        sortMenusItems={[
          { text: "แสดง 10 แถว", onClick: () => {} },
          { text: "แสดง 20 แถว", onClick: () => {} },
          { text: "แสดง 50 แถว", onClick: () => {} },
          { text: "แสดง 100 แถว", onClick: () => {} },
          { text: "แสดงทั้งหมด", onClick: () => {} },
        ]}
      >
        <SortMenuDialog
          menuItems={[
            { text: "ปีที่สำเร็จการศึกษา", onClick: () => {} },
            { text: "ปีที่เข้ารับการศึกษา", onClick: () => {} },
            { text: "เกรดเฉลี่ยสะสม", onClick: () => {} },
          ]}
          icon={<FaSort />}
        />
        <button title="รีโหลด" className="btn-other">
          <FaRotate />
        </button>
        <button title="แสดงผลย้อนกลับ" className="btn-other">
          <FaArrowUp />
        </button>
      </TopPageMenu>

      <div className="border-b border-gray-100 w-full h-[60vh] overflow-auto mt-3">
        {/* ตารางแสดงข้อมูลศิษย์เก่าในขนาดหน้าจอ desktop */}
        <Table
          thList={[
            "ชื่อ-นามสกุล",
            "คณะ",
            "สาขา",
            "ระดับการศึกษา",
            "ลงทะเบียนศิษย์เก่า",
            "จัดการ",
          ]}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((alumni) => {
            return (
              <tr key={alumni}>
                {/* ข้อมูลทั่วไป */}
                <td className="p-3">
                  <div className="flex gap-5 items-center">
                    <div className="w-[50px] h-[50px] border border-gray-300 rounded-full overflow-hidden">
                      <img
                        src="/assets/no_profile.png"
                        className="w-full h-full object-cover"
                        alt="user-profile"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="font-bold">นายปฐมพร วงสุวรรณ</p>
                      <p className="text-sm text-gray-700">663170010324</p>
                      {/* สถานะการทำงาน */}
                      <p
                        className={`text-xs transition-all cursor-pointer hover:shadow-md hover:shadow-gray-300 flex items-center gap-1.5 py-0.5 px-2 rounded-md ${
                          alumni?.currentStatus
                            ? "bg-green-200 text-green-700"
                            : "bg-red-200 text-red-700"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            alumni?.currentStatus
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {alumni?.currentStatus ? "มีงานทำ" : "ว่างงาน"}
                      </p>
                    </div>
                  </div>
                </td>
                <td>เทคโนโลยีสารสนเทศ</td>
                <td>เทคโนโลยีสารสนเทศ</td>
                <td>ปริญญาตรี 4 ปี ภาคปกติ</td>
                <td>
                  <p className="p-1 rounded-md bg-green-200 text-green-800 text-center">
                    ลงทะเบียนแล้ว
                  </p>
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center gap-1 px-3">
                    <button className="p-2 rounded-xl hover:bg-green-600 hover:text-[var(--color-text-normal)]">
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleShowAlumniInfo(alumni)}
                      className="p-2 rounded-xl hover:bg-orange-500 hover:text-[var(--color-text-normal)]"
                    >
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </Table>
        {/* แสดงข้อมูลศิษย์เก่าในขนาดหน้าจออื่นๆ */}
        <div className="w-full flex flex-col gap-2 lg:hidden h-auto">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((alumni) => {
            return (
              <div
                key={alumni}
                className="text-sm rounded-md shadow-md border-gray-300 border flex flex-col gap-2 relative w-full p-3  active:bg-[var(--color-bg)]"
              >
                <div className="w-full flex items-center gap-3">
                  <div className="w-1/6 h-[60px] rounded-full border border-gray-500 overflow-hidden">
                    <img
                      src="/assets/no_profile.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-auto grid grid-cols-2 gap-y-1 gap-x-4">
                    <p className="font-bold">นายปฐมพร วงสุวรรณ</p>
                    {/* สถานะภาพการทำงาน */}
                    <p
                      className={`text-xs transition-all cursor-pointer hover:shadow-md hover:shadow-gray-300 flex items-center gap-1.5 py-0.5 px-2 rounded-md ${
                        alumni?.currentStatus
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          alumni?.currentStatus ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                      {alumni?.currentStatus ? "มีงานทำ" : "ว่างงาน"}
                    </p>
                    <p>663170010324</p>
                    <p
                      className={`text-xs transition-all cursor-pointer hover:shadow-md hover:shadow-gray-300 flex items-center gap-1.5 py-0.5 px-2 rounded-md ${
                        alumni?.currentStatus
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {alumni?.currentStatus
                        ? "ลงทะเบียนแล้ว"
                        : "ยังไม่ลงทะเบียน"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p>การศึกษาระดับปริญญาตรี 4 ปี ภาคปกติ</p>
                  <p>คณะเทคโนโลยีสารสนเทศ</p>
                  <div className="w-full flex justify-between">
                    สาขาวิชาเทคโนโลยีสารสนเทศ
                    <div className="flex gap-2 items-center">
                      <button className="p-2 rounded-xl hover:bg-green-600 hover:text-[var(--color-text-normal)]">
                        <FaPen />
                      </button>
                      <button
                        onClick={() => handleShowAlumniInfo(alumni)}
                        className="p-2 rounded-xl hover:bg-orange-500 hover:text-[var(--color-text-normal)]"
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* จัดการการแสดงผลหน้า */}
      <ManageTableMenu />

      {/* แสดงข้อมูลของศิษย์เก่า */}
      <Dialog
        isOpen={showAlumniInfo}
        onClose={() => setShowAlumniInfo(false)}
        title={"ข้อมูลศิษย์เก่า"}
      >
        <div className="w-[350px] h-[72vh] overflow-y-auto overflow-x-hidden lg:w-auto">
          <AlumniInfo alumni={activeAlumni} />
        </div>
        <button className="mt-5 btn-primary">
          <FaPaperPlane />
          ติดต่อ
        </button>
      </Dialog>

      {/* ฟอร์มเพิ่มข้อมูลศิษย์เก่า */}
      <Dialog
        title="เพิ่มข้อมูลศิษย์เก่า"
        isOpen={showCreateEditAlumniesForm}
        onClose={() => setCreateEditAlumniesForm(false)}
      >
        <form className="w-[330px] lg:w-[450px] px-1 text-sm lg:text-[1rem] flex flex-col items-start">
          <CreateEditAlumniForm alumni={activeAlumni} />
        </form>
      </Dialog>

      {/* ตัวกรองค้นหา */}
      <Dialog
        isOpen={showSearchFilter}
        onClose={() => setShowSearchFilter(false)}
        title={"ต้วกรองค้นหาข้อมูล"}
      >
        <div className=" text-sm lg:text-[0.9rem] lg:w-[400px] w-[300px] flex flex-col">
          <div className="">ระดับการศึกษา</div>
          <Select
            options={educationLevelList.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            placeholder="เลือกระดับการศึกษา"
            className="mt-1"
          />{" "}
          {/* คณะและสาขาวิชา */}
          <div className="w-full flex gap-5 mt-4">
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">คณะ</div>
              <Select
                options={faculties.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
                placeholder="เลือกคณะ"
                className="mt-0.5"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">สาขาวิชา</div>
              <Select
                // options={faculties.map((item) => ({
                //   label: item.name,
                //   value: item.id,
                // }))}
                placeholder="เลือกสาขา"
                className="mt-0.5"
              />
            </div>
          </div>
          {/* ปีที่เข้ารับและสำเร็จการศึกษา */}
          <div className="w-full flex gap-5 mt-4">
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">ปีที่เข้ารับการศึกษา</div>
              <Select
                options={years}
                placeholder="เลือกปี พ.ศ."
                className="mt-0.5"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">ปีที่สำเร็จการศึกษา</div>
              <Select
                options={years}
                placeholder="เลือกปี พ.ศ."
                className="mt-0.5"
              />
            </div>
          </div>
          {/* สถานะ */}
          <div className="w-full flex gap-5 mt-4">
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">สถานะการลงทะเบียน</div>
              <select name="" id="" className="input-control-secondary">
                <option value="" disabled>
                  -- เลือกสถานะ --
                </option>
                <option value="">ลงทะเบียนแล้ว</option>
                <option value="">ยังไม่ลงทะเบียน</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <div className="">สถานภาพการทำงาน</div>
              <select name="" id="" className="input-control-secondary">
                <option value="" disabled>
                  -- เลือกสถานะ --
                </option>
                <option value="">ว่างงาน</option>
                <option value="">มีงานทำ</option>
              </select>
            </div>
          </div>
          {/* เกรดเฉลี่ยสะสม */}
          <p className="mt-4">เกรดเฉลี่ยสะสม</p>
          <div className="w-full flex items-center gap-5 mt-1">
            <input
              type="number"
              placeholder="ตั้งแต่"
              className="w-1/2 input-control-secondary"
            />
            <label htmlFor="">-</label>
            <input
              type="number"
              placeholder="ไม่เกิน"
              className="w-1/2 input-control-secondary"
            />
          </div>
        </div>

        {/* ค้นหาและรีเซ็ต */}
        <div className="mt-5 flex w-full items-center justify-between">
          <button className="btn-danger">
            <FaRotateRight /> รีเซ็ต
          </button>
          <BtnPrimary icon={<FaSearch />} onClick={() => {}} title={"ค้นหา"} />
        </div>
      </Dialog>
    </div>
  );
};
export default AlumniesPage;
