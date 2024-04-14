import Sequelize from "sequelize";

const mysql = new Sequelize("tasklist", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

export default mysql;
