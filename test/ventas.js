 const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createventas } = require("./test_utils");

before(async () => {
  newventa = await createventas();
});
//////////////////////////Hacer una venta/////////////////////////////////

describe("Como administrador quiero hacer una venta:", function () {
  it("Crear Venta", async () => {
    const ventas = {
      id_cliente: 12345,
      id_emp: "123hjb544",
      fecha_venta: "07/11/2022",
      matricula: "MRDS191790",
      receta: "F101",
      subtotal: 1200,
      descuento: 100,
      total: 1100,
    };
    const response = await axios.post(API_URL + "/postventasinfo", ventas);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });


  ///////////////Error de falta de matricula///////////////////////////////////
  it("Falta la Matricula del Doctor", async () => {
    try {
      const ventas = {
        id_cliente: 12345,
        id_emp: "123hjb544",
        fecha_venta: "07/11/2022",
        //matricula: "MRDS191790",
        receta: "F101",
        subtotal: 1200,
        descuento: 100,
        total: 1100,
      };
      const response = await axios.post(API_URL + "/postventasinfo", ventas);
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
///////////////Error de falta de Receta//////////////////////////////////
it("Falta la Receta del Doctor", async () => {
  try {
    const ventas = {
      id_cliente: 12345,
      id_emp: "123hjb544",
      fecha_venta: "07/11/2022",
      matricula: "MRDS191790",
      //receta: "F101",
      subtotal: 1200,
      descuento: 100,
      total: 1100,
    };
    const response = await axios.post(API_URL + "/postventasinfo", ventas);
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
//////////////////////////Error por falta de No. de receta una venta///////////////////////////////// 

