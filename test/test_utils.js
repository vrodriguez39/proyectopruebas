const axios = require("axios");
const API_URL = "http://localhost:5000/api/";

const createUser = async () => {
  const usuarios = {
    name: "Nuevo Usuario",
    email: "nuevo@gmail.com",
    password: "admin",
    rol: "admin",
    sucursal: "Tecate",
  };
  const response = await axios.post(API_URL + "/postuserinfo", usuarios);
  return response.data;
};

const createproductos = async () => {
  const productos = {
    name: "Nuevo Producto",
    codigo: 123,
    descripcion: "Mouse de 5 Botones",
    precio: 600,
    stock: 10,
    sucursal: "Tecate",
  };
  const response = await axios.post(API_URL + "/postproductosinfo", productos);
  return response.data;
};
const createsucursales = async () => {
  const sucursales = {
    name: "Nuevo Sucursal",
    direccion: "Blvd Agua Caliente",
    ubicacion: "Zona Norte",
    telefono: 641107594,
    status: "Activa",
  };
  const response = await axios.post(
    API_URL + "/postsucursalesinfo",
    sucursales
  );
  return response.data;
};
const createroles = async () => {
  const roles = {
    name: "admin",
    status: "Activo",
  };
  const response = await axios.post(API_URL + "/postroles", roles);
  return response.data;
};
/////////////////////////Crear Ventas///////////////////////////
const createventas = async () => {
  const ventas = {
      id_cliente: 12345,
      id_emp: "123hjb544",
      fecha_venta: "07/11/2022",
      subtotal: 1200,
      descuento: 100,
      total: 1100,
     };
  const response = await axios.post(
    API_URL + "/postventasinfo",
    ventas
  );
  return response.data;
};



module.exports = {
  API_URL,
  createUser,
  createproductos,
  createsucursales,
  createroles,
  createventas,
};
