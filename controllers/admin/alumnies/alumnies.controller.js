
import { useState } from "react";

export default function useAlumniesController(){

    // เปิด/ปิด แบบฟอร์มเพิ่มและแก้ไขข้อมูลศิษย์เก่า
    const [showCreateEditAlumniesForm,setCreateEditAlumniesForm] = useState(false);
    // เปิด/ปิด ตัวกรองค้นหา
    const [showSearchFilter,setShowSearchFilter] = useState(false);
    // เก็บข้อมูลศิษย์ที่จเอาไปใช่งาน
    const [activeAlumni,setActiveAlumni] = useState(null);
    // เปิด/ปิด แสดงข้อมูลศิษย์เก่า
    const [showAlumniInfo,setShowAlumniInfo] = useState(false);

    // แสดงข้อมูลศิษย์เก่า
    const handleShowAlumniInfo = (alumni) => {
        setActiveAlumni(alumni);
        setShowAlumniInfo(true);
    }

    return{
        showCreateEditAlumniesForm,
        setCreateEditAlumniesForm,
        showSearchFilter,
        setShowSearchFilter,
        activeAlumni,
        setActiveAlumni,
        showAlumniInfo,
        setShowAlumniInfo,
        handleShowAlumniInfo
    }
}