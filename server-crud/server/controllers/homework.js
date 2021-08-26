import db2 from "../database/tindex";

// Mostrar Tarea _______________________________________
const actualizarTarea = async (req, res) => {
    try {
        const results = await db2.tarea.findAll();
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
}


// Insertar Tarea __________________________________________________

const agregarTarea = async (req, res) => {
    try {
        let tarea = req.body;
        await db2.tarea.create(
            tarea
        );
        res.status(200).send(
            {
                message:"Creada"
            }
        );
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        )
    }
}
// Eliminar Tarea _______________________________________
const eliminarTarea = async (req, res) => {
    try {

        await db2.tarea.destroy(
           
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).send({message: "Ok"});
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}

// Editar Tarea _______________________________________
const editarTarea = async (req, res) => {
    try {
        let tarea = req.body;
        await db2.tarea.update(
            tarea,
            {
                where:{ id: req.params.id},
            }
        );
        res.status(200).send(
            {
                message:"Actualziado correctamente"
            }
        )
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}

export {    
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
};