import { MdWavingHand } from "react-icons/md";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ListBar from "./ListBar";

const NavbarDasboard = () => {
  const [dropDown, setDropDown] = useState(false);

  const dropDownShow = () => {
    setDropDown(true);
    AOS.init({
      once: true,
      duration: 600,
    });
    if (dropDown) {
      setDropDown(false);
    }
  };

  const dropDownHide = () => {
    setTimeout(() => {
      setDropDown(false);
    }, 0.5);
  };

  return (
    <nav className="w-screen fixed z-10 bg-[#EBF3FC] shadow-md flex flex-wrap items-center justify-between mx-auto p-4 max-md:p-3 xl:p-6">
      <a
        href="#"
        className="md:ml-40 lg:ml-48 xl:ml-60 flex items-center space-x-3 rtl:space-x-reverse text-[#6148FF]"
      >
        <span className="self-center text-2xl max-md:text-xl whitespace-nowrap font-semibold ">
          Hi, Admin
        </span>
        <MdWavingHand className="text-3xl text-[#CC9667]" />
      </a>

      <div
        onClick={dropDownShow}
        className="md:hidden inline-flex items-center justify-center  w-10 h-10 text-sm text-gray-500 "
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </div>

      {dropDown && (
        <div data-aos="fade-right" className=" w-full mt-6 px-3">
          <ListBar closeDropDown={dropDownHide} />
        </div>
      )}
    </nav>
  );
};

export default NavbarDasboard;
