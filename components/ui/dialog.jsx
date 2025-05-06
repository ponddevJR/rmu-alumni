// dialog

import { FaX } from "react-icons/fa6";

const Dialog = ({children,onClose,isOpen,title}) => {
    if(!isOpen)return null;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center z-30 inset-0">
        <div 
            className="w-full h-full absolute top-0 bg-black/40 inset-0 transition-all"
            onClick={onClose}
        />
        <div className="rounded-md z-50 w-auto h-auto bg-white shadow-md shadow-gray-600 flex flex-col pb-5">
            {/* title */}
            <div className="flex items-center justify-between w-full p-4 border-b border-[var(--color-secondary)]">
                <label htmlFor="" className="text-lg lg:text-xl font-bold">{title}</label>
                <button onClick={onClose} className="p-2 rounded-md text-lg lg:text-xl hover:bg-[var(--color-secondary)]">
                    <FaX/>
                </button>
            </div>
            <div className="mt-4 px-4">
                {children}
            </div>
        </div>

    </div>
  )
}
export default Dialog