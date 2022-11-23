const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createUser } = require("./test_utils");
 
before(async () => {
  newuser = await createUser();
  });
 
 describe("Como administrador quiero hacer login:", function () {
    it("Inicio de sesion exitosa", async () => {
      const usuarios = {
        name: "Nuevo Usuario 11",
        email: "vrodriguez30@gmail.com",
      password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      }
      const response = await axios.post(API_URL + "/registrar", usuarios);
      expect(response.status).to.be.equal(201);
      expect(response.data).to.be.an("object");
      //console.log(response.data); muestra en consola
    });
     ///////////////////Error por falta de Codigo//////////////////////////////////
  it("Falta ingresar el correo", async () => {
    try {
      const usuarios = {
        name: "Nuevo Usuario 11",
        //email: "vrodriguez39@gmail.com",
      password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      };
      const response = await axios.post(
        API_URL + "/postuserinfo",
        usuarios
      );
      expect(error.response.status).not.to.be.equal(201);
      expect(response.data).to.be.an("object");
    } catch (error) {
      if (error.response) {
        expect(error.response.status).not.to.be.equal(201);
      } else {
        throw error;
      }
    }
  });
///////////////falta ingresar tu password
it("Falta ingresar la contraseña", async () => {
  try {
    const productos = {
      name: "Nuevo Usuario 11",
     email: "vrodriguez39@gmail.com",
    //password: "admin",
      rol: "admin",
      sucursal: "Tecate",
    };
    const response = await axios.post(
      API_URL + "/postuserinfo",
      productos
    );
    expect(error.response.status).not.to.be.equal(201);
    expect(response.data).to.be.an("object");
  } catch (error) {
    if (error.response) {
      expect(error.response.status).not.to.be.equal(201);
    } else {
      throw error;
    }
  }
});



});
