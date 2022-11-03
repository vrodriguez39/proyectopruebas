const expect = require("chai").expect;
//const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createsucursales } = require("./test_utils");

before(async () => {
  newsucursales = await createsucursales();
});

describe("Como administrador quiero administrar Sucursales:", function () {
  it("Agregar Sucursal", async () => {
    const sucursal = {
      name: "Mexicali",
      direccion: "Blvd Lazaro Cardenas",
      ubicacion: "Zona Norte",
      telefono: 6864128595,
      status: "Activa",
    };
    const response = await axios.post(
      API_URL + "/postsucursalesinfo",
      sucursal
    );
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data);
  });
  it("Mostrar todas las sucursales", async () => {
    const response = await axios.get(API_URL + "/listadesucursales");
    //console.log(response.data); muestra todos los productos en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });

  it("Mostrar detalle de Sucursal", async () => {
    //console.log(newsucursal)

    const response = await axios.get(
      API_URL + "/sucursal/" + newsucursales._id
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Editar Sucursal", async () => {
    const sucursal = {
      codigo: 200,
    };
    const response = await axios.put(
      API_URL + "/actualizarsucursales/" + newsucursales._id,
      sucursal
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Eliminar Sucursal", async () => {
    const response = await axios.delete(API_URL + "/deletesucursales/" + newsucursales._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

});
