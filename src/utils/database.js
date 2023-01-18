const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "courses_api",
  username: "postgres",
  password: "root",
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

module.exports = db;