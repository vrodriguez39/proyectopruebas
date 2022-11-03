
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

/////////////////////Para mostrar producto por ID///////////////////////////////////
exports.getproductounico = async (req, res) => {
    try {
  
      var productoquery = {_id: req.params.productoid };
  
      const productounico = await productos. findOne(productoquery);
  
      res.status(200).json(productounico);
  
    } catch (error) {
  
      res.status(404).json({error: "Producto no encontrado" });
    }
  };
/////////////////Para Actualizar/////////////////////////////////////////////
exports.updateproductos = async (req, res) => {
  try {
    const { name, codigo, descripcion, precio, stock, sucursal} = req.body;
 
    var updateQuery = { _id: req.params.id };
    
    const actualizar = { name, codigo, descripcion, precio, stock, sucursal };

    const productoUpdate = await productos.findByIdAndUpdate(updateQuery, {
      $set: actualizar,
    });
    res.status(200).json(productoUpdate)
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado para actualizar" });
  }
};

////////////////////////////////Para eliminar/////////////////////////////////
exports.deleteproductos = async (req, res) => {
  try {
    var deleteQuery = { _id: req.params.id };
    const deleteproductos = await productos.findByIdAndDelete(deleteQuery);
    res.status(200).json(deleteproductos);
  } catch (error) {
    res.status(404).json({ error: "Productoso no encontrado para eliminar" });
  }
};
