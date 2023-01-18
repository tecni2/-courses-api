const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");

class UserServices {
  static async getById(id) {
    try {
      const user = await Users.findByPk(id, { attributes: { exclude: ["updatedAt", "createdAt", "password"] } });
      return user;
    } catch (error) {
      throw error;
    };
  }
  static async getWithCourses(id) {
    try {
      const user = await Users.findByPk(id, {
        attributes: { exclude: ["updatedAt", "createdAt", "password"] },
        include: {
          model: UsersCourses,
          as: "courses",
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"],
          },
          attributes: ["id"],
        },
      });
      return user;
    } catch (error) {
      throw error;
    };
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    };
  }

  static async update(id, { firstName, lastName, password }) {
    try {
      const result = await Users.update({ firstName, lastName, password }, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    };
  }

  static async buy(userId, courseId) {
    try {
      const result = await UsersCourses.create({ userId, courseId });
      return result;
    } catch (error) {
      throw error;
    };
  }
}

module.exports = UserServices;