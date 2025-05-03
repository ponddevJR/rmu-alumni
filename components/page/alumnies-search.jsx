import { FaChevronLeft, FaIdCard, FaN, FaPen, FaPerson } from "react-icons/fa6";
import "@/styles/alumnies-search.css";
import { FaPenAlt } from "react-icons/fa";
import Image from "next/image";
import useSearchAluniesController from "@/controllers/page/search-alumnies.controller"

const AlumniesSearch = ({ showLogin }) => {

  const {searchValue,setSearchValue} = useSearchAluniesController();

  return (
    <>
      <button onClick={showLogin} className="back-to-login mt-5">
        <FaChevronLeft />
      </button>

      <label htmlFor="" className="title">
        ตรวจสอบรายชื่อศิษย์เก่า
      </label>
      <p className="description">พิมพ์รหัสนักศึกษา ชื่อ - นามสกุล</p>

      <div className="search-wrapper mt-5 w-full ">
        <span className="icon">
          <FaIdCard />
        </span>
        <input
          name="cardID"
          value={searchValue.cardID}
          onChange={handleInputSearch}
          type="text"
          placeholder="รหัสนักศึกษา"
        />
      </div>

      <div className="name-wrapper w-full mt-3 mb-4">
        {/* ชื่อ */}
        <div className="search-wrapper w-full lg:w-1/2">
          <span className="icon">
            <FaPen />
          </span>
          <input
            name="fname"
            value={searchValue.fname}
            onChange={handleInputSearch}
            type="text"
            placeholder="ชื่อ"
          />
        </div>
        {/* นามสกุล */}
        <div className="search-wrapper w-full lg:w-1/2 ">
          <span className="icon">
            <FaPenAlt />
          </span>
          <input
            name="lname"
            value={searchValue.lname}
            onChange={handleInputSearch}
            type="text"
            placeholder="นามสกุล"
          />
        </div>
      </div>

      {/* แสดงรายชื่อศิษย์เก่า */}
      {
        searchValue.cardID !== "" ||
        searchValue.fname !== "" ||
        searchValue.lname !== "" ? (
          <>
            <label htmlFor="" className="description">
              ผลการค้นหา
            </label>
            <div className="list-wrapper">
              {/* ข้อมูลศิษย์เก่า */}
              <span className="list">
                {/* รูปภาพ */}
                <div className="image-wrapper">
                  <Image
                    alt="alumni-image"
                    src="/assets/no_image.png"
                    width={50}
                    height={50}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                {/*รายละเอียด  */}
                <div className="info-wrapper">
                  <span className="detail-wrapper">
                    <label htmlFor="" className="font-bold">
                      รหัสนักศึกษา:{" "}
                    </label>
                    <p>663170010324</p>
                  </span>
                  <span className="detail-wrapper">
                    <label htmlFor="" className="font-bold">
                      ชื่อ-นามสกุล:{" "}
                    </label>
                    <p>ปฐมพร วงสุวรรณ</p>
                  </span>
                  <span className="detail-wrapper">
                    <label htmlFor="" className="font-bold">
                      คณะ:{" "}
                    </label>
                    <p>เทคโนโลยีสารสนเทศ</p>
                  </span>
                  <span className="detail-wrapper">
                    <label htmlFor="" className="font-bold">
                      สาขา:{" "}
                    </label>
                    <p>เทคโนโลยีสารสนเทศ</p>
                  </span>

                  <div
                    className={`p-1 rounded-xl bg-green-300 flex items-center gap-1 text-xs`}
                  >
                    <div className="w-2 h-2 bg-green-700 rounded-full ml-1"></div>
                    <label htmlFor="" className="">
                      ลงทะเบียนแล้ว
                    </label>
                  </div>
                </div>
              </span>

            </div>
          </>
        ) : null}
    </>
  );
};
export default AlumniesSearch;
