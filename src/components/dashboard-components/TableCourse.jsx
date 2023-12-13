/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
// import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";

import "aos/dist/aos.css";
const Table = ({
  colom,
  dataTable,
  button,
  setOpenModal,
  setOpenModalCourse,
}) => {
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const sortedData = dataTable.sort((a, b) => b.id - a.id);

  const handleDeleteCourse = (courseId) => {
    // Simpan chapterId ke localStorage
    setCurrentCourseId(courseId);
    localStorage.setItem("courseId", courseId);
    setOpenModal(courseId);
  };

  if (!dataTable) {
    return null;
  }

  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col justify-end space-y-5 max-md:w-96 lg:flex-row lg:items-center">
        <div className="flex flex-row items-center space-x-3">
          <div className="p-1 me-16">
            <button
              type="button"
              onClick={setOpenModalCourse}
              className="flex items-center px-4 py-1 text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              <IoMdAddCircleOutline />
              Tambah
            </button>

            {/* <TableFilter
              hideSearchInput={searchInputHide}
              filter={filter}
              setFilter={(e) => setSelectedFilter(e.target.value)}
            /> */}
          </div>
          {/* {searchInput ? (
            <div data-aos="fade-right">
              <SearchInput setSearch={(e) => setSearch(e.target.value)} />
            </div>
          ) : (
            <button
              className="p-1 text-[#6148FF] text-2xl"
              onClick={searchInputShow}
            >
              <IoSearchSharp />
            </button>
          )} */}
        </div>
      </div>
      <table className="w-full mt-3 text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
          <tr>
            {colom.map((data, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {data.col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.courseCode}
              </th>

              <td className="px-6 py-4">{data.Category}</td>
              <td className="px-6 py-4">{data.courseName ?? "-"}</td>
              <td className="px-6 py-4">{data.courseLevel ?? "-"}</td>
              {button && (
                <td className="px-6 py-4 space-x-3">
                  <Link
                    to={`/chapter-management/${data.id}`}
                    onClick={setOpenModal}
                    type="button"
                    className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Tambah Chapter
                  </Link>
                  <button
                    onClick={() => handleDeleteCourse(data.id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Hapus
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
