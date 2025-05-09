import {AlertDialog} from "./alert-dialog";
import {FacultyCourseService} from "../services/faculty-course";
import {useState} from "react";

export default function useFacultyAndCourse(){
        // เก็บข้อมูลคณะ
        const [faculties,setFaculties] = useState([]);
        // เก็บข้อมูลระดับการศึกษา
        const [educationLevelList,setEducationLevelList] = useState([]);

        // ดึงข้อมูลคณะ
        const getFaculties = async () => {
            try {
                const res = await FacultyCourseService.facultiesList();
                setFaculties(res?.data?.faculties);
            } catch (error) {
                console.error(error);
                AlertDialog.serverError();
            }
        }

        // ดึงข่อมูลระดับการศึกษา
        const getEducationLevelList = async () => {
            try {
                const res = await FacultyCourseService.educationLevelList();
                setEducationLevelList(res?.data?.educationLevelList);
            } catch (error) {
                console.error(error);
                AlertDialog.serverError();
            }
        }

        return {
            faculties,
            setFaculties,
            getFaculties,
            getEducationLevelList,
            educationLevelList
        }
}