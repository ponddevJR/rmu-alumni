"use client";
import TopPageMenu from "@/components/ui/top-page-menu";
import Dialog from "@/components/ui/dialog";
import useCourseManagementController from "@/controllers/admin/course-management/course-management.controller";
import Select from "@/components/ui/react-select";
import { FaCheck, FaX } from "react-icons/fa6";
import useFacultyAndCourse from "@/functions/faculty-course";
import { useEffect } from "react";
import Loading from "@/components/ui/loader";

const CourseManagement = () => {
  const {
    setShowCreateEditDialog,
    showCreateEditDialog,
    createEditType,
    setCreateEditType,
    departmentForm,
    setDemartmentForm,
    deleteEduLevelFormDepartment,
    handleCreateEditDepartMent,
    isLoading,
  } = useCourseManagementController();

  // ดึงข้อมูลคณะและระดับการศึกษา
  const { getFaculties, faculties, educationLevelList, getEducationLevelList } =
    useFacultyAndCourse();
  useEffect(() => {
    getFaculties();
    getEducationLevelList();
  }, []);

  return (
    <>
    {isLoading && <Loading/>}
      <div className="w-full h-full p-3 bg-white rounded-md shadow-md border border-gray-300">
        {/* เมนู */}
        <TopPageMenu
          createDialogTitle={"เพิ่มข้อมูล"}
          hanldeSearch={() => {}}
          searchValue={""}
          setShowCreateDialog={() => setShowCreateEditDialog(true)}
          setShowFilterDialog={() => {}}
          sortMenusItems={[]}
        />

        {/* dialog เพิ่มข้อมูล */}
        <Dialog
          isOpen={showCreateEditDialog}
          onClose={() => setShowCreateEditDialog(false)}
          title={"เพิ่มข้อมูล"}
        >
          <form
            onSubmit={createEditType === 2 ? handleCreateEditDepartMent : null}
            className="w-[320px] lg:w-[480px] text-sm lg:text-[1rem]"
          >
            {/* เลือกว่าจะเพิ่มข้อมูลอะไร */}
            <div className="w-full flex  flex-1 items-center mb-4">
              <button
                type="button"
                onClick={() => setCreateEditType(0)}
                className={`w-full py-2 hover:bg-[var(--color-secondary)] ${
                  createEditType === 0 &&
                  "border-b-2 border-[var(--color-primary)]"
                }`}
              >
                คณะ
              </button>
              <button
                type="button"
                onClick={() => setCreateEditType(1)}
                className={`w-full py-2 hover:bg-[var(--color-secondary)] ${
                  createEditType === 1 &&
                  "border-b-2 border-[var(--color-primary)]"
                }`}
              >
                ระดับการศึกษา
              </button>
              <button
                type="button"
                onClick={() => setCreateEditType(2)}
                className={`w-full py-2 hover:bg-[var(--color-secondary)] ${
                  createEditType === 2 &&
                  "border-b-2 border-[var(--color-primary)]"
                }`}
              >
                สาขาวิชา
              </button>
            </div>
            {/* แสดงผล การเพิ่มข้อมูลตามประเภท */}
            {createEditType === 0 ? (
              // ฟอร์มเพิ่มข้อมูลคณะ
              <>
                <label htmlFor="" className="">
                  ชื่อคณะ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="เทคโนโลยีสารสนเทศ"
                  className="input-control-secondary"
                  required
                />
                <p className="mt-4">หมายเหตุ</p>
                <input
                  type="text"
                  placeholder="เช่น ตึก38"
                  className="input-control-secondary"
                />
              </>
            ) : createEditType === 1 ? (
              // แบบฟอร์มเพิ่มข้อมูลระดับการศึกษา
              <>
                <label htmlFor="" className="">
                  ชื่อระดับการศึกษา <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ปริญญาตรี 4 ปี ภาคปกติ   "
                  className="input-control-secondary"
                  required
                />
                <p className="mt-4">หมายเหตุ</p>
                <input
                  type="text"
                  placeholder="เช่น นักศึกษาระดับปริญญาตรี"
                  className="input-control-secondary"
                />
              </>
            ) : (
              // แบบฟอร์มเพิ่มข้อมูล สาขาวิชา
              <>
                <div className="">
                  คณะ <span className="text-red-500">*</span>
                </div>
                <Select
                  options={faculties.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  placeholder="เลือกคณะ"
                  className="mt-1"
                  required
                  onChange={(selectOption) => {
                    setDemartmentForm((prev) => ({
                      ...prev,
                      facultyId: selectOption.value,
                    }));
                  }}
                  value={faculties
                    .map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))
                    .find((item) => item.value === departmentForm.facultyId) || null}
                />
                <div className="mt-4">
                  ชื่อสาขาวิชา <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="ชื่อสาขาวิชา/ภาควิชา"
                  className="input-control-secondary mt-1"
                  required
                  value={departmentForm.name}
                  onChange={(e) =>
                    setDemartmentForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />

                <div className="mt-4">
                  อยู่ในระดับการศึกษาใดบ้าง{" "}
                  <span className="text-red-500">*</span>
                </div>
                <Select
                  options={educationLevelList.filter((item) => !departmentForm.eduLevelId.map((item) => item.id).includes(item.id)).map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  placeholder="เลือกระดับการศึกษา"
                  className="mt-1"
                  onChange={(selectOption) => {
                    setDemartmentForm((prev) => ({
                      ...prev,
                      eduLevelId: [
                        ...prev.eduLevelId,
                        { id: selectOption.value, name: selectOption.label },
                      ],
                    }));
                  }}
                  value={null}
                />
                {departmentForm.eduLevelId.length > 0 && (
                  <>
                    <p htmlFor="" className="mt-2">
                      รายการที่เลือก:
                    </p>
                    <div
                      className={`relative w-full h-[45px] overflow-auto mt-1 text-xs lg:text-sm`}
                    >
                      <div className="absolute top-0 left-0 w-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
                        {departmentForm.eduLevelId.map((item, index) => {
                          return (
                            <span
                              key={index}
                              className="p-1 rounded-md bg-[var(--color-secondary)] flex justify-between items-center gap-1"
                            >
                              {item.name.length > 30
                                ? item.name.substring(0, 30) + "..."
                                : item.name}
                              <FaX
                                onClick={() =>
                                  deleteEduLevelFormDepartment(item.id)
                                }
                                className="hover:text-red-500 cursor-pointer"
                              />
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-4">ระบุหมายเหตุ</div>
                <input
                  type="text"
                  placeholder="เช่น คอมพิวเตอร์"
                  className="input-control-secondary mt-1"
                  value={departmentForm.remark}
                  onChange={(e) =>
                    setDemartmentForm((prev) => ({
                      ...prev,
                      remark: e.target.value,
                    }))
                  }
                />
              </>
            )}

            {/* เพิ่มข้อมูล */}
            <p className="text-red-600 mt-5">*โปรดตรวจสอบความถูกต้องของข้อมูลก่อนบันทึก!</p>
            <button className="btn-primary mt-1">
              <FaCheck /> {
                isLoading ? "กำลังดำเนินการ..." : "บันทึก"
            }
            </button>
          </form>
        </Dialog>
      </div>
    </>
  );
};
export default CourseManagement;
