const router = require('express').Router();

const {postUserInfo,getUserinfo,getusuariounico,deleteUser,updateUser} = require('../controllers/user');


//EndPoints
//Ruta para crear Usuarios
router.post("/postuserinfo",postUserInfo);
//Ruta para mostrar Usuarios
router.get("/listadeusuarios",getUserinfo);
//Ruta para mostrar usuario por ID
router.get("/usuario/:userid",getusuariounico);
//Ruta para actualizar
router.put("/actualizarusuario/:id",updateUser);
//Ruta para eliminar
router.delete("/deleteuser/:id",deleteUser);



module.exports = router;
