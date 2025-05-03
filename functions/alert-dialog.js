import Swal from "sweetalert2";

export const AlertDialog = {
  serverError: (text = "โปรดตรวจสอบเครือข่ายของคุณและรองรีเฟรชใหม่อีกครั้ง") =>
    Swal.fire(
      "เกิดข้อผิดพลาด",
      text,
      "error"
    ),
    successDialog:(text) => {
      Swal.fire(
        text,"","success"
      )
    }

};
