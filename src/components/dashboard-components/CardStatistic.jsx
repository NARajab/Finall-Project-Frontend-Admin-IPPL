/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { PiUsersLight } from "react-icons/pi";
import { MdOutlineClass, MdClass } from "react-icons/md";

import { getCourseData, getMemberData } from "../../api/fetching";

const CardStatistic = () => {
  const [courseData, setCourseData] = useState([]);
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCourse = await getCourseData();
        const resMember = await getMemberData();
        setCourseData(resCourse);
        setMemberData(resMember);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col place-items-center max-md:space-y-7 md:flex-row md:space-x-2 lg:space-x-6 xl:space-x-10 ">
      <div className="flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-[#489CFF] p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <PiUsersLight className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl text-[#489CFF]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {memberData.filter((member) => member.role === "member").length ===
            0
              ? "Belum ada user"
              : memberData.filter((member) => member.role === "member").length}
          </p>
          <p className="font-bold md:font-semibold">Active Users</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 md:space-x-3  xl:space-x-6 bg-[#73CA5C] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <MdOutlineClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#73CA5C]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {courseData.length === 0 ? "Belum ada kelas" : courseData.length}
          </p>
          <p className="font-bold">Active Class</p>
        </div>
      </div>
      {/* <div className="flex flex-row items-center space-x-5 md:space-x-3   xl:space-x-6 bg-[#6148FF] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <MdClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#6148FF]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {courseData.filter((course) => course.courseType === "premium")
              .length === 0
              ? "Belum ada kelas"
              : courseData.filter((course) => course.courseType === "premium")
                  .length}
          </p>
          <p className="font-bold">Premium Class</p>
        </div>
      </div> */}
    </div>
  );
};

export default CardStatistic;
