"use cleint";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"),{ssr:false});
export default Select;