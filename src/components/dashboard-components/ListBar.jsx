/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const ListBar = ({ closeDropDown }) => {
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("activeButton") || "beranda";
  });

  const toggleActive = (buttonName) => {
    setIsActive(buttonName);
    closeDropDown();
  };

  useEffect(() => {
    localStorage.setItem("activeButton", isActive);
  }, [isActive]);

  const logOut = () => {
    const itemsToRemove = ["activeButton", "..."]; // Add more items as needed

    // Remove each item from localStorage
    itemsToRemove.forEach((item) => {
      localStorage.removeItem(item);
    });
  };

  return (
    <div className="flex-auto flex flex-col justify-between h-52 rounded-lg font-bold mt-2 text-[#3C3C3C]  md:text-white ">
      <ul className="w-full md:text-sm lg:text-md xl:text-lg">
        <li>
          <Link
            onClick={() => toggleActive("beranda")}
            to={"/dashboard"}
            href="#"
            className={`block py-2  max-md:rounded px-3 lg:px-4  hover:bg-[#489CFF] ${
              isActive === "beranda" ? "bg-[#489CFF]" : ""
            }  w-full  `}
          >
            <div className="flex items-center gap-2">
              Beranda
              <FaHome />
            </div>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggleActive("kelolaKelas")}
            to={"/dashboard/class-management"}
            href="#"
            className={`block py-2  max-md:rounded px-3 lg:px-4  hover:bg-[#489CFF] ${
              isActive === "kelolaKelas" ? "bg-[#489CFF]" : ""
            }  w-full  `}
          >
            <div className="flex items-center gap-2">
              Kelola kelas
              <SiGoogleclassroom />
            </div>
          </Link>
        </li>
      </ul>
      <div className="md:flex md:flex-row md:justify-center">
        <Link to={"/"}>
          <button
            onClick={logOut}
            type="button"
            className="flex flex-row items-center space-x-2 text-xs md:text-sm lg:text-md xl:text-lg md:w-32 lg:w-40 xl:w-48 p-2.5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg me-2 mb-2 "
          >
            <svg
              className="h-5 text-white dark:text-dark"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
            <div className="text-white ">Keluar</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListBar;
