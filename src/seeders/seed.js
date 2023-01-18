const db = require("../utils/database");
const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");
const Videos = require("../models/videos.model");

const users = [
  { firstName: "Eliezer", lastName: "Chus", password: "1234", email: "elie@gmail.com" },
  { firstName: "Brandon", lastName: "Don", password: "1234", email: "brando@gmail.com" },
  { firstName: "Catalina", lastName: "Lopez", password: "1234", email: "catalina@gmail.com" },
];

const courses = [
  { title: "Java", description: "Curso de Java", instructor: "Jose" },
  { title: "Node", description: "Curso de Node", instructor: "David" },
  { title: "PHP", description: "Curso de PHP", instructor: "Pedro" },
];

const usersCourses = [
  { userId: 1, courseId: 1 },
  { userId: 1, courseId: 2 },
  { userId: 3, courseId: 3 },
];

const categories = [
  { name: "programacion", courseId: 1 },
  { name: "computadoras", courseId: 2 },
  { name: "programacio", courseId: 2 },
  { name: "computadora", courseId: 2 },
  { name: "programaci", courseId: 3 },
];

const videos = [
  { title: "introduccion", url: "http://video1", courseId: 1 },
  { title: "final", url: "http://video2", courseId: 1 },
  { title: "recursos", url: "http://video3", courseId: 2 },
  { title: "variable", url: "http://video4", courseId: 2 },
  { title: "funciones", url: "http://video5", courseId: 3 },
];

db.sync({ force: true })
  .then(() => {
    console.log("Sembrando")

    users.forEach(user => Users.create(user));
    courses.forEach(course => Courses.create(course));
    setTimeout(() => {
      usersCourses.forEach(uc => UsersCourses.create(uc));
      categories.forEach(category => Categories.create(category));
      videos.forEach(video => Videos.create(video));
    }, 200);
  })
  .catch(error => console.log(error));
