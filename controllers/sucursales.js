
const sucursales = require("../models/sucursales");
const router = require("../router/sucursales");

///////////////////////para crear Sucursales////////////////////////////////
exports.postsucursalesInfo = async (req, res) => {
  try {
    const { name, direccion, ubicacion, telefono, status} = req.body;
    //validando Sucursal
    if (!name) {
      return res.status(422).json({ error: "Por favor agrega Sucursal" });
    }
    if (!direccion) {
      return res.status(422).json({ error: "Por favor agrega la direccion" });
    }
    if (!ubicacion) {
      return res.status(422).json({ error: "Por favor agrega la ubicacion" });
    }
    if (!telefono) {
        return res.status(422).json({ error: "Por favor agrega el telefono" });
      }
      if (!status) {
        return res.status(422).json({ error: "Por favor agrega el status" });
      }
      
    const sucursalesinfo = new sucursales({
      name,
      direccion,
      ubicacion,
      telefono,
      status,
    });
    const sucursalesPostResult = await sucursales.create(sucursalesinfo);

    res.status(201).json(sucursalesPostResult);

  } catch (error) {

    res.status(400).json({ error: "Algo Ocurrio" });
  }
};
/////////////////////Ruta para mostrar Sucursales/////////////////////////////////////
exports.getsucursalesinfo = async (req, res) => {
  try {

    const listadesucursales = await sucursales.find({}).sort({ date: "DESC" });

    res.status(200).json(listadesucursales);

  } catch (error) {

    res.status(400).json({ error: "Sucursal no encontrada" });
  }
};

/////////////////////Para mostrar Sucursal por ID///////////////////////////////////
exports.getsucursalunica = async (req, res) => {
    try {
  
      var sucursalquery = {_id: req.params.sucursalesid };
  
      const sucursalunica = await sucursales. findOne(sucursalquery);
  
      res.status(200).json(sucursalunica);
  
    } catch (error) {
  
      res.status(404).json({error: "Sucursal no encontrado" });
    }
  };
/////////////////Para Actualizar/////////////////////////////////////////////
exports.updatesucursales = async (req, res) => {
  try {
    const { name, direccion, ubicacion, telefono, status} = req.body;
 
    var updateQuery = { _id: req.params.id };
    
    const actualizar = { name, direccion, ubicacion, telefono, status };

    const sucursalesUpdate = await sucursales.findByIdAndUpdate(updateQuery, {
      $set: actualizar,
    });
    res.status(200).json(sucursalesUpdate)
  } catch (error) {
    res.status(404).json({ error: "Sucursal no encontrado para actualizar" });
  }
};

////////////////////////////////Para eliminar/////////////////////////////////
exports.deletesucursales = async (req, res) => {
  try {
    var deleteQuery = { _id: req.params.id };
    const deletesucursales = await sucursales.findByIdAndDelete(deleteQuery);
    res.status(200).json(deletesucursales);
  } catch (error) {
    res.status(404).json({ error: "Sucursal no encontrada para eliminar" });
  }
};
