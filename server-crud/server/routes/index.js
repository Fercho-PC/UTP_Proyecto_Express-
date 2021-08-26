
import {
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
} from "../controllers/homework";



import { Router } from "express";
const router =Router();

router.get("/tarea/",actualizarTarea);
router.post("/tarea/",agregarTarea);
router.put("/tarea/:id",editarTarea);
router.delete("/tarea/:id",eliminarTarea);

module.exports = router;