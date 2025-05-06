export default function useCreateEditAlumniController(){

    // ข้อมูลปีสำหรับเลือกปีที่เข้ารับการศึกษาและปีที่จบการศึกษา
    const years = Array.from({length:(new Date().getFullYear() + 543) - 2550},(_,i) => {
        const year = 2550 + i;
        return {label:year,value:year.toString()};
    })
  
    return {
        years
    }
}