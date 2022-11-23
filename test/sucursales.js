const expect = require("chai").expect;
//const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createsucursales } = require("./test_utils");

before(async () => {
  newsucursales = await createsucursales();
});

/* describe("Como administrador quiero administrar Sucursales:", function () {
  it("Agregar Sucursal", async () => {
    const sucursal = {
      name: "Ensenada",
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

}); */

describe("Como administrador quiero agregar sucursales:", function () {
  it("Sucursal Agregada", async () => {
    const sucursal = {
      name: "Ensenada",
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
  ///////////////Error por falta de sucursal///////////////////////////////////
  it("Falta de poner nombre de la sucursal", async () => {
    try {
      const sucursal = {
        //name: "Ensenada",
        direccion: "Blvd Lazaro Cardenas",
        ubicacion: "Zona Norte",
        telefono: 6864128595,
        status: "Activa",
      };
      const response = await axios.post(API_URL + "/postsucursalesinfo", sucursal);
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
///////////////Error por falta la direccion de la Sucursal///////////////////////////////////
it("Falta de poner la Direccion de la sucursal", async () => {
  try {
    const sucursal = {
      name: "Ensenada",
      //direccion: "Blvd Lazaro Cardenas No.1200",
      ubicacion: "Zona Norte",
      telefono: 6864128595,
      status: "Activa",
    };
    const response = await axios.post(API_URL + "/postsucursalesinfo", sucursal);
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
///////////////Error por falta la ubicacion de la Sucursal///////////////////////////////////
it("Falta de poner la ubicacion de la sucursal", async () => {
  try {
    const sucursal = {
      name: "Ensenada",
      direccion: "Blvd Lazaro Cardenas No.1200",
      //ubicacion: "Zona Norte",
      telefono: 6864128595,
      status: "Activa",
    };
    const response = await axios.post(API_URL + "/postsucursalesinfo", sucursal);
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
///////////////Error por falta la Zona de la Sucursal///////////////////////////////////
it("Falta de poner el status de la sucursal", async () => {
  try {
    const sucursal = {
      name: "Ensenada",
      direccion: "Blvd Lazaro Cardenas No.1200",
      ubicacion: "Zona Norte",
      telefono: 6864128595,
      //status: "Activa",
    };
    const response = await axios.post(API_URL + "/postsucursalesinfo", sucursal);
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
///////////////Mostrar todas las Sucursales///////////////////////////////////
describe("Como administrador/lider quiero ver todas las sucursales:", function () {
  it("Sucursales Mostradas", async () => {
    const response = await axios.get(API_URL + "/listadesucursales");
    //console.log(response.data); //muestra todos las sucursales en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });
});

///////////////Detalle de una Sucursal///////////////////////////////////////
describe("Como administrador quiero ver detalle de una sucursal:", function () {
  it("Detalle de Sucursal Mostrado", async () => {
    //console.log(newsucursal)

    const response = await axios.get(
      API_URL + "/sucursal/" + newsucursales._id
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
});
///////////////Editar una Sucursal///////////////////////////////////////
describe("Como administrador quiero editar y actualizar sucursales:", function () {
  it("Sucursal editada", async () => {
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

});
///////////////Eliminar una Sucursal///////////////////////////////////////

describe("Como administrador quiero eliminar sucursales:", function () {
  it("Sucursal Eliminada", async () => {
    const response = await axios.delete(API_URL + "/deletesucursales/" + newsucursales._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
})