const router = require('express').Router();

const {postventasInfo,getventasinfo,getventasunico,updateventas,deleteventas} = require('../controllers/ventas');


//EndPoints
//Ruta para crear Ventas
router.post("/postventasinfo",postventasInfo);
//Ruta para mostrar Ventas
//router.get("/listadeventas",getventasinfo);

//Ruta para mostrar Ventas por ID
//router.get("/ventas/:ventasid",getventasunico);
//Ruta para actualizar
//router.put("/actualizarventas/:id",updateventas);
//Ruta para eliminar
//router.delete("/deleteventas/:id",deleteventas);



module.exports = router;
