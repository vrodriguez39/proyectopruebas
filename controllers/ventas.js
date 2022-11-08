
const ventas = require("../models/ventas");
const router = require("../router/ventas");

///////////////////////para crear Ventas////////////////////////////////
exports.postventasInfo = async (req, res) => {
  try {
    const { id_cliente,id_emp,fecha_venta, subtotal, descuento, total} = req.body;
    //validando Venta
    if (!id_cliente) {
      return res.status(422).json({ error: "Por favor agrega No. de cliente" });
    }
    if (!id_emp) {
      return res.status(422).json({ error: "Por favor agrega No. de empleado" });
    }
    if (!fecha_venta) {
      return res.status(422).json({ error: "Por favor agrega fecha de venta" });
    }
    if (!subtotal) {
      return res.status(422).json({ error: "Por favor agrega el Subtotal" });
    }
    if (!descuento) {
      return res.status(422).json({ error: "Por favor agrega descuento" });
    }
    if (!total) {
      return res.status(422).json({ error: "Por favor agrega el total" });
    }
          
    const ventasinfo = new ventas({
      id_cliente,
      id_emp,
      fecha_venta,
      subtotal,
      descuento,
      total
      });
    const ventasPostResult = await ventas.create(ventasinfo);

    res.status(201).json(ventasPostResult);

  } catch (error) {

    res.status(400).json({ error: "Algo Ocurrio" });
  }
};
/////////////////////Ruta para mostrar Sucursales/////////////////////////////////////
/* exports.getsucursalesinfo = async (req, res) => {
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
};*/
