import {useState} from "react";
export default function useProfilePageController(){
    const [menuIndexActive,setMenuIndexActive] = useState(0);

    return{
        menuIndexActive,
        setMenuIndexActive
    }
}