import { useState } from "react";

export default function useUserEditProfileController(){
    const [previewProfile,setPreviewProfile] = useState("");
    
    const handleImageInput = (e) => {
        setPreviewProfile(URL.createObjectURL(e.target.files[0]));
    }

    return{
        previewProfile,
        handleImageInput,
        setPreviewProfile
    }
}