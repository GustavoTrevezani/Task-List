import { Sequelize, DataTypes } from "sequelize";
import mysql from "./database.js";

const Task = mysql.define("task", {
  // Model attributes are defined here
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
    // allowNull defaults to true
  },
});

Task.sync({ force: false });

export default Task;
