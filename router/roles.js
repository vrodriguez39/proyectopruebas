const router = require('express').Router();

const {postrolesInfo,getrolesinfo,getrolunico,updateroles,deleteroles} = require('../controllers/roles');


//EndPoints
//Ruta para crear Roles
router.post("/postroles",postrolesInfo);
//Ruta para mostrar 
router.get("/listaderoles",getrolesinfo);
//Ruta para mostrar rol por ID

router.get("/roles/:rolesid",getrolunico);
//Ruta para actualizar
router.put("/actualizarroles/:id",updateroles);
//Ruta para eliminar
router.delete("/deleteroles/:id",deleteroles);



module.exports = router;
