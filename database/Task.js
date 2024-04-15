import { Sequelize, DataTypes } from "sequelize";
import mysql from "./database.js";

const Task = mysql.define("tasks", {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    // allowNull defaults to true
  },
});

Task.sync({ force: false });

export default Task;
