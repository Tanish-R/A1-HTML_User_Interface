import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoBarbell } from "react-icons/io5";
import { CgAirplane } from "react-icons/cg";



export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineScience className="text-4xl text-blue-600" />
        <HiOutlineLightBulb className="text-4xl text-blue-600" />
        <IoBarbell className="text-5xl"/>
        <CgAirplane className="text-blue-600"/>
      </div>
    </div>
  );
}