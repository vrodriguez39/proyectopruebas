const router = require('express').Router();

const {postsucursalesInfo,getsucursalesinfo,getsucursalunica,updatesucursales,deletesucursales} = require('../controllers/sucursales');


//EndPoints
//Ruta para crear Sucursales
router.post("/postsucursalesinfo",postsucursalesInfo);
//Ruta para mostrar Productos
router.get("/listadesucursales",getsucursalesinfo);

//Ruta para mostrar productos por ID
router.get("/sucursal/:sucursalesid",getsucursalunica);
//Ruta para actualizar
router.put("/actualizarsucursales/:id",updatesucursales);
//Ruta para eliminar
router.delete("/deletesucursales/:id",deletesucursales);



module.exports = router;
