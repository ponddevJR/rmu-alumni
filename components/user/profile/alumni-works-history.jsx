const AlumniWorksHistory = () => {
  return (
    <div className="mt-2 w-full h-[200px] overflow-auto flex flex-col">
      <table className="mt-3 w-[700px]">
        <thead>
          <tr className="text-sm lg:text-[0.85rem] font-light border-b border-gray-500">
            <th className="py-1">บริษัท</th>
            <th className="py-1">ตำแหน่ง</th>
            <th className="py-1">วันที่เริ่มงาน</th>
            <th className="py-1">วันที่สิ้นสุดงาน</th>
            <th className="py-1">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cursor-pointer hover:bg-[var(--color-secondary)] transition-all duration-300">
            <td className="text-sm lg:text-[0.85rem] py-2.5 border-b border-gray-200 text-center">company1</td>
            <td className="text-sm lg:text-[0.85rem] py-2.5 border-b border-gray-200 text-center">programmer</td>
            <td className="text-sm lg:text-[0.85rem] py-2.5 border-b border-gray-200 text-center">06/05/2568</td>
            <td className="text-sm lg:text-[0.85rem] py-2.5 border-b border-gray-200 text-center">06/05/2568</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}
export default AlumniWorksHistory
