const mongoose = require("mongoose");

var ventasSchema = mongoose.Schema({
  id_cliente: {
    type: Number,
  },
  id_emp: {
    type: String,
  },
  fecha_venta: {
    type: String,
  },
  matricula: {
    type: String,
  
  },
  receta: {
    type: String,
   
  },
  subtotal: {
    type: Number,
  },
  descuento: {
    type: Number,
  },
  total: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ventasinfo", ventasSchema);
