
const productos = require("../models/productos");
const router = require("../router/productos");

///////////////////////para crear Productos////////////////////////////////
exports.postproductosInfo = async (req, res) => {
  try {
    const { name, codigo, descripcion, precio, stock, sucursal} = req.body;
    //validando Producto
    if (!name) {
      return res.status(422).json({ error: "Por favor agrega nombre" });
    }
    if (!codigo) {
      return res.status(422).json({ error: "Por favor agrega el codigo" });
    }
    if (!descripcion) {
      return res.status(422).json({ error: "Por favor agrega la descripcion" });
    }
    if (!precio) {
        return res.status(422).json({ error: "Por favor agrega el precio" });
      }
      if (!stock) {
        return res.status(422).json({ error: "Por favor agrega el stock" });
      }
      if (!sucursal) {
        return res.status(422).json({ error: "Por favor agrega la sucursal" });
      }

    const productosinfo = new productos({
      name,
      codigo,
      descripcion,
      precio,
      stock,
      sucursal
    });
    const productosPostResult = await productos.create(productosinfo);

    res.status(201).json(productosPostResult);

  } catch (error) {

    res.status(400).json({ error: "Algo Ocurrio" });
  }
};
/////////////////////Ruta para mostrar Productos/////////////////////////////////////
exports.getproductosinfo = async (req, res) => {
  try {

    const listadeproductos = await productos.find({}).sort({ date: "DESC" });

    res.status(200).json(listadeproductos);

  } catch (error) {

    res.status(400).json({ error: "producto no encontrado" });
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
