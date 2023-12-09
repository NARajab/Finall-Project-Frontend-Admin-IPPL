/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TableFilter = ({ hideSearchInput, filter, setFilter }) => {
  return (
    // <div className="flex flex-row items-center  border border-[#6148FF] text-[#6148FF] rounded-3xl p-2 space-x-1 ">
    //   <CiFilter className="text-2xl" />
    //   <div>Filter</div>
    // </div>
    <>
      <select
        onClick={hideSearchInput}
        // onChange={setFilter}
        className="border border-[#6148FF] font-bold text-[#6148FF] w-44 rounded-3xl focus:ring-[#6148FF] "
        name="cars"
        id="cars"
        style={{
          appearance: "none",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cg%20clip-path%3D%22url(%23clip0_97_2225)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.66675%202.49984C1.66675%202.0396%202.03984%201.6665%202.50008%201.6665H17.5001C17.9603%201.6665%2018.3334%202.0396%2018.3334%202.49984V4.65466C18.3334%205.09669%2018.1578%205.52061%2017.8453%205.83317L12.5001%2011.1783V15.8332C12.5001%2016.1488%2012.3217%2016.4374%2012.0394%2016.5785L8.70609%2018.2452C8.44777%2018.3744%208.14099%2018.3606%207.89531%2018.2087C7.64963%2018.0569%207.50008%2017.7887%207.50008%2017.4998V11.1783L2.1549%205.83317C1.84234%205.52061%201.66675%205.09669%201.66675%204.65466V2.49984ZM3.33341%203.33317V4.65466L8.92267%2010.2439C9.07895%2010.4002%209.16675%2010.6122%209.16675%2010.8332V16.1515L10.8334%2015.3181V10.8332C10.8334%2010.6122%2010.9212%2010.4002%2011.0775%2010.2439L16.6667%204.65466V3.33317H3.33341Z%22%20fill%3D%22%236148FF%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_97_2225%22%3E%3Crect%20width%3D%2216.6667%22%20height%3D%2216.6667%22%20fill%3D%22white%22%20transform%3D%22translate(1.66675%201.6665)%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
          backgroundSize: "24px",
        }}
      >
        <option value="" className="font-bold ">
          Filter
        </option>
        {/* {filter.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))} */}
      </select>
    </>
  );
};

export default TableFilter;
