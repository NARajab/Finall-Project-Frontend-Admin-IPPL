import { useEffect, useState } from "react";
import TableChapter from "../../../components/dashboard-components/TableChapter";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import ValidationDeleteModal from "../../../components/dashboard-components/ValidationDeleteModal";
import AddChapterModal from "../../../components/dashboard-components/AddChapterModal";
import AddContentModal from "../../../components/dashboard-components/AddContentModal";
import {
  getChapter,
  createChapter,
  createContent,
  deleteChapter,
} from "../../../api/fetching";

const ChapterManagement = () => {
  const { courseId } = useParams();
  const [chapterData, setChapterData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [contentData, setContentData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalChapter, setOpenModalChapter] = useState(false);
  const [openModalContent, setOpenModalContent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getChapter(courseId);
        setChapterData(res);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchData();
  }, [courseId]);

  const handleSaveChapter = async (chapterTitle) => {
    try {
      const createChapterData = await createChapter(courseId, chapterTitle);
      setChapterData(createChapterData);
      window.location.reload();

      setOpenModalChapter(false);
    } catch (error) {
      console.error("Error saving course:", error.message);
    }
  };
  const handleDeleteChapter = async () => {
    const chapterId = localStorage.getItem("chapterId");
    try {
      await deleteChapter(chapterId);
      localStorage.removeItem("chapterId");
      setOpenModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error saving course:", error.message);
    }
  };

  const handleSaveContent = async (contentTitle, contentUrl, videoDuration) => {
    const chapterId = localStorage.getItem("chapterId");
    try {
      const createContentData = await createContent(
        chapterId,
        contentTitle,
        contentUrl,
        videoDuration
      );
      setContentData(createContentData);
      localStorage.removeItem("chapterId");
      window.location.reload();
      setOpenModalContent(false);
    } catch (error) {
      console.error("Error saving course:", error.message);
    }
  };

  if (chapterData.length == 0) {
    return;
  }

  const tableColumns = [
    { col: "ID" },
    { col: "JUDUL" },
    { col: "JUDUL CONTENT" },
    { col: "URL CONTENT" },
    { col: "AKSI" },
  ];
  return (
    <>
      <AddChapterModal
        openModalChapter={openModalChapter}
        setCloseModalChapter={() => setOpenModalChapter(false)}
        onSave={handleSaveChapter}
      />
      <AddContentModal
        openModalContent={openModalContent}
        setCloseModalContent={() => setOpenModalContent(false)}
        onSaveContent={handleSaveContent}
      />
      <ValidationDeleteModal
        openModal={openModal}
        saveDelete={handleDeleteChapter}
        setCloseModal={() => setOpenModal(false)}
      />
      <div className="px-5 mt-3 md:mt-5 xl:mt-5 max-md:ml-8">
        <Link
          to={"/dashboard/class-management"}
          className="flex items-center mb-5"
        >
          <IoMdArrowBack size={25} />
          <p className="ms-2 font-montserrat">Kembali</p>
        </Link>
        <p className="pb-0 text-xl font-bold md:text-2xl ">
          Kelola Chapter Dan Content
        </p>
        <TableChapter
          colom={tableColumns}
          dataTable={chapterData}
          button={true}
          setOpenModal={() => setOpenModal(true)}
          setOpenModalChapter={() => setOpenModalChapter(true)}
          setOpenModalContent={() => setOpenModalContent(true)}
        />
      </div>
    </>
  );
};

export default ChapterManagement;
