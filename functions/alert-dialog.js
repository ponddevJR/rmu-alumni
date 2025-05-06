import Swal from "sweetalert2";

export const AlertDialog = {
  serverError: (text = "โปรดตรวจสอบเครือข่ายของคุณแล้วลองรีเฟรชใหม่อีกครั้ง") =>
    Swal.fire(
      "เกิดข้อผิดพลาด",
      text,
      "error"
    ),
    successDialog:(text) => {
      Swal.fire(
        text,"","success"
      )
    },
    confirmDialog:() => {
      return Swal.fire({
        title:"ยืนยันออกจากระบบ",
        text:"ต้องการออกจากระบบหรือไม่?",
        icon:"question",
        showDenyButton:true,
        denyButtonText:"ไม่ต้องการ",
        denyButtonColor:"#1E90FF",
        confirmButtonColor:"#FF0000",
        confirmButtonText:"ออกจากระบบ"
      })
    }

};
