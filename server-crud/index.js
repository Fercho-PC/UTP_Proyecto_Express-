import srevidor from "./server/index";
const port = 3001;

srevidor.listen(port, ()=>{
  console.log("");
  console.log("");
  console.log("Servidor corriendo en el puerto: "+port,)
  console.log("Ruta:  http://localhost:"+port+"/")
  console.log("");
  console.log("");
  console.log("!!Creacion de la tabla en caso de no existir::");
  console.log("");
});