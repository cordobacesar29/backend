require('dotenv').config()

const Sequelize = require("sequelize");

const UserModel = require("./models/user");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql"
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(() => {
    console.log("Sync success")
  });

  module.exports = {
    User
  }