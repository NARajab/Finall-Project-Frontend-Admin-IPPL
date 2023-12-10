import { useEffect, useState } from "react";

import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import TableCourse from "../../../components/dashboard-components/TableCourse";
import ValidationDeleteModal from "../../../components/dashboard-components/ValidationDeleteModal";
import AddCourseModal from "../../../components/dashboard-components/AddCourseModal";
import { getCourseData, createCourse } from "../../../api/fetching";

const CourseManagement = () => {
  const [courseData, setCourseData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalCourse, setOpenModalCourse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourseData();
        setCourseData(res);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchData();
  }, []);
  //handleSaveCourse
  const handleSaveCourse = async (formData) => {
    try {
      const token = localStorage.getItem("...");
      await createCourse(
        formData.courseName,
        formData.categoryId,
        formData.courseCode,
        formData.courseLevel,
        formData.description,
        formData.objectiveCourse,
        formData.rating,
        formData.image,
        formData.chapterTitle,
        token
      );

      const createCourseData = await getCourseData();
      setCourseData(createCourseData);

      setOpenModalCourse(false);
    } catch (error) {
      console.error("Error saving course:", error.message);
    }
  };

  if (courseData.length == 0) {
    return;
  }

  const tableColumns = [
    { col: "KODE KELAS" },
    { col: "KATEGORI" },
    { col: "NAMA KELAS" },
    { col: "LEVEL" },
    { col: "AKSI" },
  ];
  return (
    <>
      <AddCourseModal
        openModalCourse={openModalCourse}
        setCloseModalCourse={() => setOpenModalCourse(false)}
        onSave={handleSaveCourse}
      />
      <ValidationDeleteModal
        openModal={openModal}
        setCloseModal={() => setOpenModal(false)}
      />
      <CardStatistic />
      <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8 ">
        <p className="pb-0 text-xl font-bold md:text-2xl ">Kelola Kelas</p>
        <TableCourse
          colom={tableColumns}
          dataTable={courseData}
          button={true}
          setOpenModal={() => setOpenModal(true)}
          setOpenModalCourse={() => setOpenModalCourse(true)}
        />
      </div>
    </>
  );
};

export default CourseManagement;
