const { Router } = require("express");
const { getUserById, getUserWithCourses, createUser, updateUser, buyCourse } = require("../controllers/users.controllers");

const router = Router();

router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUserWithCourses);

router.post("/users", createUser);

router.post("/users/:userId/courses/:courseId/buy", buyCourse)

router.put("/users/:id", updateUser);


module.exports = router;