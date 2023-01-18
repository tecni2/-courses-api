const { Router } = require("express");
const { getAllCourses, getCourseWithCategoriesAndVideos, createCourse, updateCourse } = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/:id/categories-videos", getCourseWithCategoriesAndVideos);

router.post("/courses", createCourse);

router.post("/courses/:id", updateCourse);

module.exports = router;