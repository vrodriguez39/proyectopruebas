const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createventas } = require("./test_utils");

before(async () => {
  newventa = await createventas();
});

describe("Como administrador quiero administar ventas:", function () {
  it("Crear venta", async () => {
    const ventas = {
      id_cliente: 12345,
      id_emp: "123hjb544",
      fecha_venta: "07/11/2022",
      subtotal: 1200,
      descuento: 100,
      total: 1100,
    };
    const response = await axios.post(API_URL + "/postventasinfo", ventas);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });
});

  /* it("Mostrar todos los usuarios", async () => {
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
 */
