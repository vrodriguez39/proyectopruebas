const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createUser } = require("./test_utils");
const User = require("../models/User");


const { success, error, validation } = require("../helpers/responseApi");
const { randomString } = require("../helpers/common");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Verification = require("../models/Verification");





before(async () => {
  newuser = await createUser();
});

/* describe("Como administrador quiero administrar Usuarios:", function () {
  it("Agregar usuario", async () => {
    const usuarios = {
      name: "Nuevo Usuario 3",
      email: "nuevo35@gmail.com",
      password: "admin",
      rol: "admin",
      sucursal: "Tecate",
    };
    const response = await axios.post(API_URL + "/postuserinfo", usuarios);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });

  it("Mostrar todos los usuarios", async () => {
    const response = await axios.get(API_URL + "/listadeusuarios");
    //console.log(response.data); muestra todos los usuarios en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });

  it("Mostrar detalle de usuario", async () => {
    //console.log(newuser)

    const response = await axios.get(API_URL + "/usuario/" + newuser._id);

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Editar Usuario", async () => {
    const response = await axios.get(API_URL + "/usuario/" + newuser._id);

    expect(response.data.email).to.be.equals("nuevo@gmail.com");

    response.data.should.have.property("name");
    response.data.should.have.property("email");
    response.data.should.have.property("password");
    response.data.should.have.property("rol");
    response.data.should.have.property("sucursal");

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
   it("Eliminar usuario", async () => {
    const response = await axios.delete(API_URL + "/deleteuser/" + newuser._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
}); */

////////////MOSTRADOS DE OTRA FORMA///////////////////////////////////////////////

describe("Como administrador quiero agregar usuario:", function () {
  it("Usuario agregado", async () => {
    const usuarios = {
      name: "Nuevo Usuario 1",
      email: "nuevo11@gmail.com",
      password: "admin",
      rol: "admin",
      sucursal: "Tecate",
    };
    const response = await axios.post(API_URL + "/postuserinfo", usuarios);

    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });

  ///////////////////Error por falta de Usuario//////////////////////////////////

  it("Falta el campo de usuario", async () => {
    try {
      const usuarios = {
        //name: "Nuevo Usuario 1",
        email: "nuevo11@gmail.com",
        password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      };
      const response = await axios.post(API_URL + "/postuserinfo", usuarios);
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
///////////////////Error por falta de Email//////////////////////////////////
it("Falta el campo de email", async () => {
  try {
    const usuarios = {
      name: "Nuevo Usuario 1",
      //email: "nuevo11@gmail.com",
      password: "admin",
      rol: "admin",
      sucursal: "Tecate",
    };
    const response = await axios.post(API_URL + "/postuserinfo", usuarios);
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
///////////////////Error por falta de Password//////////////////////////////////
it("Falta el campo de Password", async () => {
  try {
    const usuarios = {
      name: "Nuevo Usuario 1",
      email: "nuevo11@gmail.com",
      //password: "admin",
      rol: "admin",
      sucursal: "Tecate",
    };
    const response = await axios.post(API_URL + "/postuserinfo", usuarios);
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

///////////////////Error por correo Existente//////////////////////////////////
it("Correo existente", async () => {
  //console.log(newuser)

  const response = await axios.get(API_URL + "/usuario/" + newuser._id);

  expect(response.status).to.be.equal(200);
  //expect(response.data).to.be.an("object");
});



});













describe("Como administrador quiero ver todos los usuarios:", function () {
  it("Usuarios mostrados", async () => {
    const response = await axios.get(API_URL + "/listadeusuarios");
    //console.log(response.data); muestra todos los usuarios en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });
});



describe("Como administrador quiero ver detalle de un Usuario:", function () {
  it("Detalles mostrados", async () => {
    //console.log(newuser)

    const response = await axios.get(API_URL + "/usuario/" + newuser._id);

    expect(response.status).to.be.equal(200);
    //expect(response.data).to.be.an("object");
  });
});

  describe("Como administrador quiero editar un Usuario:", function () {
    it("Usuario Editado", async () => {
      const response = await axios.get(API_URL + "/usuario/" + newuser._id);

      expect(response.data.email).to.be.equals("nuevo@gmail.com");

      response.data.should.have.property("name");
      response.data.should.have.property("email");
      response.data.should.have.property("password");
      response.data.should.have.property("rol");
      response.data.should.have.property("sucursal");

      expect(response.status).to.be.equal(200);
      expect(response.data).to.be.an("object");
    });
  });
  describe("Como administrador quiero eliminar un Usuario:", function () {
    it("Usuario Eliminado", async () => {
      const response = await axios.delete(
        API_URL + "/deleteuser/" + newuser._id
      );
      expect(response.status).to.be.equal(200);
      expect(response.data).to.be.an("object");
    });
  });

