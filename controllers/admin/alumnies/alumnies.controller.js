import { AlertDialog } from "@/functions/alert-dialog";
import { useState } from "react";

export default function useAlumniesController(){

    // เปิด/ปิด แบบฟอร์มเพิ่มและแก้ไขข้อมูลศิษย์เก่า
    const [showCreateEditAlumniesForm,setCreateEditAlumniesForm] = useState(false);

    return{
        showCreateEditAlumniesForm,
        setCreateEditAlumniesForm,
    }
}