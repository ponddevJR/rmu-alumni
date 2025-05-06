import { FaFilter } from "react-icons/fa";
import BtnPrimary from "./btn-primary";
import { FaPlus } from "react-icons/fa6";
import SearchBox from "./search-box";
import SortMenuDialog from "./sortmenu-dialog";


const TopPageMenu = ({
  setShowCreateDialog,
  setShowFilterDialog,
  searchValue,
  hanldeSearch,
  createDialogTitle,
  sortMenusItems,
  children
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 justify-between">
      <div className="w-full lg:w-fit flex items-center gap-1">
        {/* ปุ่มเพิ่มข้อมูล */}
        <BtnPrimary
          icon={<FaPlus />}
          onClick={setShowCreateDialog}
          title={createDialogTitle}
        />
        {/* แสดงกล่องตัวกรอง */}
        <BtnPrimary
          icon={<FaFilter />}
          onClick={setShowFilterDialog}
          title="ตัวช่วยค้นหา"
        />
        <SearchBox searchValue={searchValue} handleSearch={hanldeSearch}/>
      </div>

      <div className="flex gap-1 items-center">
        <SortMenuDialog
          menuItems={sortMenusItems}
        />
        {children}
      </div>
    </div>
  );
};
export default TopPageMenu;
