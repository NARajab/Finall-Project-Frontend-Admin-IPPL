import api from "./api.js";

const getCourseData = async () => {
  const res = await api.get("/course");
  return res.data.data;
};

const getUserCourse = async () => {
  const res = await api.get("/course-user/getData");
  return res.data.data;
};

const getChapter = async (courseId) => {
  const res = await api.get(`/chapter/getData/${courseId}`);
  return res.data.data.chapters;
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
  rating,
  image,
  chapterTitle,
  token
) => {
  const formData = new FormData();
  formData.append("courseName", courseName);
  formData.append("categoryId", categoryId);
  formData.append("courseCode", courseCode);
  formData.append("courseLevel", courseLevel);
  formData.append("description", description);
  formData.append("objectiveCourse", objectiveCourse);
  formData.append("rating", rating);
  formData.append("image", image);
  formData.append("chapterTitle", chapterTitle);
  const res = await api.post(
    "/course/create",
    {
      courseName,
      categoryId,
      courseCode,
      courseLevel,
      description,
      objectiveCourse,
      rating,
      image,
      chapterTitle,
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

const createChapter = async (courseId, chapterTitle) => {
  const res = await api.post(`chapter/create/${courseId}`, {
    chapterTitle: chapterTitle,
  });
  return res;
};

const createContent = async (
  chapterId,
  contentTitle,
  contentUrl,
  videoDuration
) => {
  const res = await api.post(`content/insert-bylink/${chapterId}`, {
    contentTitle,
    contentUrl,
    videoDuration,
  });
  return res;
};

const deleteCourse = async (courseId, token) => {
  const res = await api.delete(`course/delete/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

const deleteChapter = async (chapterId) => {
  const res = await api.delete(`chapter/delete/${chapterId}`);
  return res.data;
};

export {
  getCourseData,
  getUserCourse,
  getChapter,
  getMemberData,
  loginUser,
  createCourse,
  createChapter,
  createContent,
  deleteCourse,
  deleteChapter,
};
