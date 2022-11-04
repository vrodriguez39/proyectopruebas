
const roles = require("../models/roles");
const router = require("../router/roles");

///////////////////////para crear Roles////////////////////////////////
exports.postrolesInfo = async (req, res) => {
  try {
    const { name,status} = req.body;
    //validando Rol
    if (!name) {
      return res.status(422).json({ error: "Por favor agrega Rol" });
    }
    if (!status) {
        return res.status(422).json({ error: "Por favor agrega Status" });
      }
    

    const rolesinfo = new roles({
      name,
      status,
      
    });
    const rolesPostResult = await roles.create(rolesinfo);

    res.status(201).json(rolesPostResult);

  } catch (error) {

    res.status(400).json({ error: "Algo Ocurrio" });
  }
};
/////////////////////Ruta para mostrar Productos/////////////////////////////////////
exports.getrolesinfo = async (req, res) => {
  try {

    const listaderoles = await roles.find({}).sort({ date: "DESC" });

    res.status(200).json(listaderoles);

  } catch (error) {

    res.status(400).json({ error: "Rol no encontrado" });
  }
};

/////////////////////Para mostrar Rol por ID///////////////////////////////////
exports.getrolunico = async (req, res) => {
    try {
  
      var rolesquery = {_id: req.params.rolesid };
  
      const rolunico = await roles.findOne(rolesquery);
  
      res.status(200).json(rolunico);
  
    } catch (error) {
  
      res.status(404).json({error: "Rol no encontrado" });
    }
  };
/////////////////Para Actualizar/////////////////////////////////////////////
exports.updateroles = async (req, res) => {
  try {
    const { name, status} = req.body;
 
    var updateQuery = { _id: req.params.id };
    
    const actualizar = { name, status };

    const rolesUpdate = await roles.findByIdAndUpdate(updateQuery, {
      $set: actualizar,
    });
    res.status(200).json(rolesUpdate)
  } catch (error) {
    res.status(404).json({ error: "Rol no encontrado para actualizar" });
  }
};

////////////////////////////////Para eliminar/////////////////////////////////
exports.deleteroles = async (req, res) => {
  try {
    var deleteQuery = { _id: req.params.id };
    const deleteroles = await roles.findByIdAndDelete(deleteQuery);
    res.status(200).json(deleteroles);
  } catch (error) {
    res.status(404).json({ error: "Rol no encontrado para eliminar" });
  }
};
