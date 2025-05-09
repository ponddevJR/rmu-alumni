import { AlertDialog } from "@/functions/alert-dialog";
import { FacultyCourseService } from "@/services/faculty-course";
import { useState } from "react";

export default function useCourseManageMentController() {
  const [isLoading, setIsLoading] = useState(false);

  // เปิด/ปิด เพิ่มและแก้ไขข้อมูล
  const [showCreateEditDialog, setShowCreateEditDialog] = useState(false);
  // แยกว่าเป็นการเพิ่มอะไร คณะ/ระดับการศึกษา/หลักสูตร
  // 0 คณะ 1 ระดับการศึกษา 2 สาขาวิชา
  const [createEditType, setCreateEditType] = useState(0);

  // เก็บข้อมูลสาขาวิชาใหม่
  const [departmentForm, setDemartmentForm] = useState({
    name: "",
    remark: "",
    facultyId: null,
    eduLevelId: [],
  });

  // ลบรายการออกจากระดับการศึกษาที่เลือก
  const deleteEduLevelFormDepartment = (id) => {
    setDemartmentForm((prev) => ({
      ...prev,
      eduLevelId: prev.eduLevelId.filter((item) => item.id !== id),
    }));
  };

  // เพิ่มข้อมูลสาขาวิชา
  const handleCreateEditDepartMent = async (e) => {
    e.preventDefault();

    if(departmentForm.eduLevelId.length < 1)
        return AlertDialog.serverError("โปรดระบุระดับการศึกษา")
    setIsLoading(true);
    
    try {
      const res = await FacultyCourseService.createDepartment(departmentForm);
      if (res?.data?.err) {
        return AlertDialog.serverError(res?.data?.err);
      }

      AlertDialog.successDialog("บันทึกข้อมูลแล้ว");
    //   reset ค่าในฟอร์ม
      setDemartmentForm({
        name: "",
        remark: "",
        facultyId: null,
        eduLevelId: [],
      });
    } catch (error) {
      console.error(error);
      AlertDialog.serverError();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    showCreateEditDialog,
    setShowCreateEditDialog,
    createEditType,
    setCreateEditType,
    setDemartmentForm,
    departmentForm,
    deleteEduLevelFormDepartment,
    handleCreateEditDepartMent,
    isLoading,
  };
}
