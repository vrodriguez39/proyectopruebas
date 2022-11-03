const mongoose = require("mongoose");

var sucursalesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  direccion: {
    type: String,
  },
  ubicacion: {
    type: String,
  },
  telefono: {
    type: Number,
  },
  status: {
    type: String,
  },
 
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("sucursales", sucursalesSchema);
