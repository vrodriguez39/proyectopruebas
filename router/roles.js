const router = require('express').Router();

const {postrolesInfo,getrolesinfo,getrolunico,updateroles,deleteroles} = require('../controllers/roles');


//EndPoints
//Ruta para crear Productos
router.post("/postroles",postrolesInfo);
//Ruta para mostrar Productos
router.get("/listaderoles",getrolesinfo);

//Ruta para mostrar productos por ID
//router.get("/producto/:productoid",getproductounico);
//Ruta para actualizar
//router.put("/actualizarproductos/:id",updateproductos);
//Ruta para eliminar
//router.delete("/deleteproductos/:id",deleteproductos);



module.exports = router;
