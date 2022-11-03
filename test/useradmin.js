const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createUser } = require("./test_utils");

before(async () => {
  newuser = await createUser();
});

describe("Como administrador quiero administrar Usuarios:", function () {
  it("Agregar usuario", async () => {
    const usuarios = {
      name: "Nuevo Usuario 2",
      email: "nuevo1@gmail.com",
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


////////////MOSTRADOS DE OTRA FORMA///////////////////////////////////////////////

 
  /* describe("Como administrador quiero agregar usuario:", function () {
    it("Usuario agregado", async () => {
      const usuarios = {
        name: "Nuevo Usuario 1",
        email: "nuevo1@gmail.com",
        password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      };
      const response = await axios.post(API_URL + "/postuserinfo", usuarios);
      expect(response.status).to.be.equal(201);
      expect(response.data).to.be.an("object");
      //console.log(response.data); muestra en consola
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

    describe("Como administrador quiero editar un Usuario:", function () {
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
  }); */
});
