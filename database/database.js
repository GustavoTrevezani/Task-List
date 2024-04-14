import Sequelize from "sequelize";

const connection = new Sequelize("tasklist", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
