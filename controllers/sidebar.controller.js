import { AlertDialog } from "@/functions/alert-dialog";
import { AuthServices } from "@/services/auth";
import { usePathname,useRouter } from "next/navigation";
import { useState } from "react";

export default function useSidebarController() {

  const [isLoading,setIsLoading] = useState(false);

  const redirect = useRouter();

  // แสดงผลเมนูในขนาดหน้าจออื่นๆ
  const [isOpen, setIsOpen] = useState(false);
  // ตรวจสอบ URL
  const url = usePathname();
  const pathName = url.split("/")[1];

  //   ออกจากระบบ
  const handleLogout = async () => {
    const {isConfirmed} = await AlertDialog.confirmDialog();
    if(!isConfirmed)return;
    setIsLoading(true);
    try {
        await AuthServices.logout();
        return redirect.push("/");
    } catch (error) {
        console.error(error);
        AlertDialog.serverError();
    }finally{
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    pathName,
    handleLogout,
    isLoading
  };
}
