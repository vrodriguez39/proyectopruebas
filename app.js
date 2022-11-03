const express = require('express');
const app = express();
const port = process.env.PORT  || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
//const db = require ("./models/db")
const mongoose = require("mongoose");
require ("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//router
app.use("/api",require("./router/user"));
app.use("/api",require("./router/productos"));
app.use("/api",require("./router/sucursales"));
app.use("/api",require("./router/roles"));


/* app.listen(port,(req,res)=>{
 console.log("Servidor Conectado");
});
db(); */


mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a MongoDb Atlas"))
.catch((error)=> console.error(error))

// Run the server
app.listen(port, () => console.log('Servidor Corriendo en',port));