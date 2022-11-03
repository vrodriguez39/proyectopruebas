const User = require("../models/User");
const router = require("../router/user");

///////////////////////para crear usuario////////////////////////////////
exports.postUserInfo = async (req, res) => {
  try {
    const { name, email, password,rol,sucursal } = req.body;
    //validando Usuario
    if (!name) {
      return res.status(422).json({ error: "Por favor agrega nombre" });
    }
    if (!email) {
      return res.status(422).json({ error: "Por favor agrega tu correo" });
    }
    if (!password) {
      return res.status(422).json({ error: "Por favor agrega tu password" });
    }
    if (!rol) {
      return res.status(422).json({ error: "Por favor agrega el Rol" });
    }
    if (!sucursal) {
      return res.status(422).json({ error: "Por favor agrega la sucursal" });
    }

    const userinfo = new User({
      name,
      email,
      password,
      rol,
      sucursal,
    });
    const userPostResult = await User.create(userinfo);

    res.status(201).json(userPostResult);

  } catch (error) {

    res.status(400).json({ error: "Algo Ocurrio" });
  }
};
/////////////////////Ruta para mostrar Usuarios/////////////////////////////////////
exports.getUserinfo = async (req, res) => {
  try {

    const listadeusuarios = await User.find({}).sort({ date: "DESC" });

    res.status(200).json(listadeusuarios);

  } catch (error) {

    res.status(400).json({ error: "Usuario no encontrado" });
  }
};

/////////////////////Para mostrar usuario por ID///////////////////////////////////
exports.getusuariounico = async (req, res) => {
  try {

    var userquery = {_id: req.params.userid };

    const usuario = await User.findOne(userquery);

    res.status(200).json(usuario);

  } catch (error) {

    res.status(404).json({error: "Usuario no encontrado" });
  }
};
/////////////////Para Actualizar/////////////////////////////////////////////
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password,rol,sucursal } = req.body;

    var updateQuery = { _id: req.params.id };
    const actualizar = { name, email, password,rol,sucursal };

    const userUpdate = await User.findByIdAndUpdate(updateQuery, {
      $set: actualizar,
    });
    res.status(200).json(userUpdate)
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrado para actualizar" });
  }
};

////////////////////////////////Para eliminar/////////////////////////////////
exports.deleteUser = async (req, res) => {
  try {
    var deleteQuery = { _id: req.params.id };
    const deleteUser = await User.findByIdAndDelete(deleteQuery);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrado para eliminar" });
  }
};
