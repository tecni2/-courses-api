const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
  try {
    const courses = await CoursesServices.getAll();
    res.json(courses);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getCourseWithCategoriesAndVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CoursesServices.getWithCategoriesAndVideos(id);
    res.json(course);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createCourse = async (req, res) => {
  try {
    const course = req.body;
    const result = await CoursesServices.create(course);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const result = await CoursesServices.update(id, fields);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllCourses,
  getCourseWithCategoriesAndVideos,
  createCourse,
  updateCourse,
}