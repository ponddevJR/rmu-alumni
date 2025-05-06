import {AlertDialog} from "./alert-dialog";

export default function useFacultyAndCourse(){
        // เก็บข้อมูลคณะและสาขา
        const [faculties,setFaculties] = useState([]);
        const getFaculties = async () => {
            try {
                
            } catch (error) {
                console.error(error);
                AlertDialog.serverError();
            }
        }
}