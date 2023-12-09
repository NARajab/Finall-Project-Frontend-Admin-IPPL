import api from "./api.js";

const getCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const getUserCourse = async () => {
  const res = await api.get("/user/getData");
  return res.data.data;
};

const getMemberData = async () => {
  const res = await api.get("/user");
  return res.data.data.allUser;
};

const loginUser = async (email, password, user) => {
  const res = await api.post(`/auth/${user}/login`, {
    email: email,
    password: password,
  });

  return localStorage.setItem("...", res.data.data);
};

const createCourse = async (
  courseName,
  categoryId,
  courseCode,
  courseLevel,
  description,
  objectiveCourse,
  image,
  token
) => {
  const formData = new FormData();
  formData.append("courseName", courseName);
  formData.append("categoryId", categoryId);
  formData.append("courseCode", courseCode);
  formData.append("courseLevel", courseLevel);
  formData.append("description", description);
  formData.append("objectiveCourse", objectiveCourse);
  formData.append("image", image);
  const res = await api.post(
    "/course/create",
    {
      courseName,
      categoryId,
      courseCode,
      courseLevel,
      description,
      objectiveCourse,
      image,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export { getCourseData, getUserCourse, getMemberData, loginUser, createCourse };
