import { FaSearch } from "react-icons/fa";

const SearchBox = ({ searchValue, handleSearch }) => {
  return (
    <div className="rounded-md w-[90%] lg:w-[300px] lg:visible flex items-center gap-3 p-2 px-3 shadow-md border border-gray-400">
      <FaSearch />
      <input
        value={searchValue}
        onChange={handleSearch}
        type="text"
        placeholder="พิมพ์เพื่อค้นหา"
        className="outline-none w-[90%] text-xs lg:text-[0.9rem]"
      />
    </div>
  );
};
export default SearchBox;
