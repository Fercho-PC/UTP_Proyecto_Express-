import dbConfig2 from "../config/dataBase2";
import Sequelize from "sequelize";

const sequelize = new Sequelize(dbConfig2.DB, dbConfig2.USER, dbConfig2.PASSWORD, {
  host: dbConfig2.HOST,
  dialect: dbConfig2.dialect,
});

const db2 = {};
db2.sequelize = sequelize;
db2.tarea = require("../models/tarea")(sequelize, Sequelize);

module.exports = db2;
