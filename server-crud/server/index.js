import morgan from "morgan";
import express from "express";
import router from "./routes/";
//import db from "./database/index";
import db2 from "./database/tindex";
import cors from "cors";
const servidor = express();

// parse requests of content-type - application/json
servidor.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
servidor.use(express.urlencoded({ extended: true }));

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(router);

//db.sequelize.sync({ force: false }).then(() => {
//  console.log("****Base de datos usuarios enlazada correctamente****");
//});

db2.sequelize.sync({ force: false }).then(() => {
  console.log("");
  console.log("");  
  console.log("****Base de datos tareas enlazada correctamente****");
});

module.exports = servidor;
