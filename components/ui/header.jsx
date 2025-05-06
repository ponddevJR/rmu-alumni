import Image from "next/image";

const Header = ({user}) => {
  
  const role = user?.role;

  return (
    <header className="mb-3 shadow-md bg-white py-2 px-4 rounded-md w-full flex items-center justify-between">
      <div className="flex flex-col items-start">
        <label htmlFor="" className="text-md lg:text-lg">ยินดีต้อนรับ!</label>
        <label htmlFor="" className="text-lg lg:text-xl font-bold text-[var(--color-text-main)]">คุณปฐมพร วงสุวรรณ</label>
      </div>
      <div className="flex items-center gap-2">
        {role === "admin" && <label className="text-xs lg:text-md font-bold text-[var(--color-primary)]">( ผู้ดูแลระบบ )</label>}
        <Image
          alt="user-image"
          src="/assets/no_image.png"
          width={100}
          height={100}
          priority
          className="border border-gray-400 object-cover rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
        />
      </div>
    </header>
  )
}
export default Header;