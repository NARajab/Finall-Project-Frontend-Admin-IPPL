/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

const AddCourseModal = ({ openModalCourse, setCloseModalCourse, onSave }) => {
  const [formData, setFormData] = useState({
    courseName: "",
    categoryId: "",
    courseCode: "",
    courseLevel: "",
    description: "",
    objectiveCourse: "",
    rating: "",
    image: null,
    chapterTitle: "",
  });

  const handlechange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };
  const handleSave = () => {
    onSave(formData);
  };
  return (
    <>
      <Modal
        show={openModalCourse}
        size="5xl"
        onClose={setCloseModalCourse}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className=" font-montserrat">
            <div className="flex flex-row gap-10">
              <div className="w-1/2">
                <div className="mb-3">
                  <label>Nama Kelas</label>
                  <input
                    type="text"
                    name="courseName"
                    onChange={handlechange}
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="mb-3">
                  <label>Kategori</label>
                  <select
                    className="w-full rounded-2xl"
                    name="categoryId"
                    onChange={handlechange}
                  >
                    <option value=""></option>
                    <option value="1">UI/UX Design</option>
                    <option value="2">Web Development</option>
                    <option value="3">Data Science</option>
                    <option value="4">Android Development</option>
                    <option value="5">Product Management</option>
                    <option value="6">IOS Development</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Kode</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl"
                    name="courseCode"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3">
                  <label>Level</label>
                  <select
                    type="text"
                    className="w-full rounded-2xl"
                    name="courseLevel"
                    onChange={handlechange}
                  >
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Nama Chapter</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl"
                    name="chapterTitle"
                    onChange={handlechange}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-3">
                  <label>Deskripsi</label>
                  <textarea
                    type="text"
                    className="w-full rounded-2xl"
                    name="description"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3">
                  <label>Tujuan</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl"
                    name="objectiveCourse"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3">
                  <label>Rating</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl"
                    name="rating"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3">
                  <label>Image</label>
                  <input
                    type="file"
                    className="w-full rounded-2xl"
                    name="image"
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button color="blue" className="w-1/2 mt-5" onClick={handleSave}>
                Simpan
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCourseModal;
