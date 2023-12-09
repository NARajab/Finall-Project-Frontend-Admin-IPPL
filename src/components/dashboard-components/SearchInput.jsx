/* eslint-disable react/prop-types */
const SearchInput = ({ setSearch }) => {
  return (
    <div className="relative  w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-full ">
        <svg
          className="w-4 h-4 text-[#6148FF] dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        onChange={setSearch}
        type="text"
        id="search-navbar"
        className="  p-2 ps-10 text-sm text-gray-900 border w-full border-[#6148FF] rounded-lg bg-gray-50 focus:ring-[#6148FF] focus:border-[#6148FF]"
        placeholder="Cari kelas...."
      />
    </div>
  );
};

export default SearchInput;
