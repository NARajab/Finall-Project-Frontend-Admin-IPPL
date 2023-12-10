/* eslint-disable react/prop-types */
import { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";

import "aos/dist/aos.css";
const TableChapter = ({
  colom,
  dataTable,
  button,
  setOpenModal,
  setOpenModalChapter,
  setOpenModalContent,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const sortedData = Array.isArray(dataTable)
    ? dataTable.sort((a, b) => a.id - b.id)
    : [];
  console.log(dataTable);

  if (!dataTable) {
    return null;
  }

  const handleAddContentClick = (chapterId) => {
    // Simpan chapterId ke localStorage
    setCurrentChapterId(chapterId);
    localStorage.setItem("chapterId", chapterId);

    // Panggil fungsi untuk membuka modal content dan kirimkan chapterId
    setOpenModalContent(chapterId);
  };

  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col justify-end space-y-5 max-md:w-96 lg:flex-row lg:items-center">
        <div className="flex flex-row items-center space-x-3">
          <div className="p-1 me-16">
            <button
              type="button"
              onClick={setOpenModalChapter}
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
                {i + 1}
              </th>

              <td className="px-6 py-4">{data.chapterTitle}</td>
              <td className="px-6 py-4">
                {/* {data.Contents.map((content, j) => {
                  <div key={j}>
                    <p>{content.contentTitle}</p>
                  </div>;
                })} */}
                {data.Contents.map((content, j) => (
                  <div key={j}>
                    <p>{content.contentTitle}</p>
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {data.Contents.map((content, j) => (
                  <div key={j}>
                    <p>{content.contentUrl}</p>
                  </div>
                ))}
              </td>
              {button && (
                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => handleAddContentClick(data.id)}
                    type="button"
                    className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Tambah Content
                  </button>
                  <button
                    onClick={setOpenModal}
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

export default TableChapter;
