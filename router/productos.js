const router = require('express').Router();

const {postproductosInfo,getproductosinfo,getproductounico,updateproductos,deleteproductos} = require('../controllers/productos');


//EndPoints
//Ruta para crear Productos
router.post("/postproductosinfo",postproductosInfo);
//Ruta para mostrar Productos
router.get("/listadeproductos",getproductosinfo);

//Ruta para mostrar productos por ID
router.get("/producto/:productoid",getproductounico);
//Ruta para actualizar
router.put("/actualizarproductos/:id",updateproductos);
//Ruta para eliminar
router.delete("/deleteproductos/:id",deleteproductos);



module.exports = router;
