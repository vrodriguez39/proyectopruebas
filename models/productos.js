const mongoose = require("mongoose");

var productosSchema = mongoose.Schema({
  name: {
    type: String,
  },
  codigo: {
    type: Number,
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  sucursal: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("productos", productosSchema);
