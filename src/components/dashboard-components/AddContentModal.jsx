/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

const AddContentModal = ({
  openModalContent,
  setCloseModalContent,
  onSaveContent,
}) => {
  const [data, setData] = useState({
    contentTitle: "",
    contentUrl: "",
    videoDuration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    console.log(data);
    onSaveContent(data.contentTitle, data.contentUrl, data.videoDuration);
  };
  return (
    <>
      <Modal
        show={openModalContent}
        size="3xl"
        onClose={setCloseModalContent}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className=" font-montserrat">
            <div className="flex flex-col items-center mb-3">
              <label className="flex text-left">Judul Content</label>
              <input
                type="text"
                name="contentTitle"
                onChange={handleChange}
                className="w-3/4 rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label className="flex text-left">Link Video</label>
              <input
                type="text"
                name="contentUrl"
                onChange={handleChange}
                className="w-3/4 rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label className="flex text-left">Duration Video</label>
              <input
                type="text"
                name="videoDuration"
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

export default AddContentModal;
