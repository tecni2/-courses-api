const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.model");

class CoursesServices {
  static async getAll() {
    try {
      const courses = await Courses.findAll();
      return courses;
    } catch (error) {
      throw error;
    };
  }

  static async getWithCategoriesAndVideos(id) {
    try {
      const course = await Courses.findOne({
        where: { id },
        include: [
          { model: Categories, as: "categories", attributes: ["name"] },
          { model: Videos, as: "videos", attributes: ["title", "url"] },
        ],
      });
      return course;
    } catch (error) {
      throw error;
    };
  }

  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    };
  }

  static async update(id, { description }) {
    try {
      const result = await Courses.update({ description }, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    };
  }
}

module.exports = CoursesServices;