import {useState} from "react";

const useSearchAluniesController = () => {
    const [searchValue, setSearchValue] = useState({
        cardID: "",
        fname: "",
        lname: "",
      });
    
      const handleInputSearch = (e) => {
        const { name, value } = e.target;
        setSearchValue((prev) => ({
          ...prev,
          [name]: value,
        }));
        console.log(searchValue);
      };

      return {
        searchValue,setSearchValue,handleInputSearch
      }
}
export default useSearchAluniesController;