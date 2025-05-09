import {useState} from "react";
export default function useProfilePageController(){
    // เมนูโปรไฟล์
    const [menuIndexActive,setMenuIndexActive] = useState(0);

    return{
        menuIndexActive,
        setMenuIndexActive
    }
}