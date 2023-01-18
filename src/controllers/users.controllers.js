const UserServices = require("../services/users.services");

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserServices.getById(id);
    res.json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getWithCourses(id)
    res.json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserServices.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const user = await UserServices.update(id, fields);
    res.json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const buyCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const result = await UserServices.buy(userId, courseId);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  buyCourse,
}