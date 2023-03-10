import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import srm from "../public/images/srm.png";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center w-full bg-[#0f171e] text-white">
        <div className="flex items-center w-3/4 gap-3 p-4 mx-6">
          <ul className="mt-4 max-sm:mr-12 max-sm:w-28"></ul>
          <span className="flex gap-2 max-lg:hidden">
            <Image src={srm} alt="image" width="40" />
            <ul className="pl-1 text-3xl font-bold">SRM</ul>
            <Link href="/about">
              <ul className="pl-6 mt-2">About</ul>
            </Link>
            <ul className="pl-6 mt-2">Events</ul>
            <ul className="flex items-center mt-1">
              <AiOutlineCaretDown />
            </ul>
            <Link href="/facilities">
              <ul className="pl-5 mt-2">Facilities</ul>
            </Link>
            <Link href="/hallbooking">
              <ul className="pl-5 mt-2">Hall Booking</ul>
            </Link>
            <ul className="pl-5 mt-2">User Manual</ul>
          </span>
        </div>
        <div className="flex items-center justify-end w-1/2 gap-6 p-4 md:mx-6">
          <span className="flex items-center gap-1 max-sm:hidden">
            <ul>
              <MdLanguage size={25} />
            </ul>
            <ul className="pl-1">EN</ul>
            {/* <ul className="pl-5">Contact Us</ul> */}
            <Link href="/login">
              <ul className="pl-5">Login</ul>
            </Link>
            <Link href="/signup">
              <ul className="px-4 py-1 ml-5 bg-[#ffffff] rounded-2xl text-black mr-10">
                Sign Up
              </ul>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
