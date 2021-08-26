module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tarea", {
        title: {
            type:Sequelize.STRING,
        },        
    });
    return Tarea;
};