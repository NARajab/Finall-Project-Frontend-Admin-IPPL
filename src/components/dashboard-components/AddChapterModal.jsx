/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

const AddChapterModal = ({
  openModalChapter,
  setCloseModalChapter,
  onSave,
}) => {
  const [data, setData] = useState({
    chapterTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    onSave(data.chapterTitle);
  };
  return (
    <>
      <Modal
        show={openModalChapter}
        size="3xl"
        onClose={setCloseModalChapter}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className=" font-montserrat">
            <div className="flex flex-col items-center mb-3">
              <label className="flex text-left">Judul Chapter</label>
              <input
                type="text"
                name="chapterTitle"
                onChange={handleChange}
                className="w-3/4 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleSave} color="blue" className="w-1/3 mt-5">
              Simpan
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddChapterModal;
