const expect = require("chai").expect;
//const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createproductos } = require("./test_utils");

before(async () => {
  newproductos = await createproductos();
});


/* describe("Como administrador quiero administrar productos:", function () {


  it("Agregar producto", async () => {
    const productos = {
      name: "Mouse Inalambrico",
      codigo: 1,
      descripcion: "Mouses de 5 Botones",
      precio: 600,
      stock: 10,
      sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });


  it("Mostrar todos los productos", async () => {
    const response = await axios.get(API_URL + "/listadeproductos");
    //console.log(response.data); muestra todos los productos en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });

   it("Mostrar detalle de producto", async () => {
    //console.log(newuser)

    const response = await axios.get(API_URL + "/producto/" + newproductos._id);

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
 


  it("Editar Producto", async () => {
    const producto = {
      codigo : 200,

    }
    const response = await axios.put(API_URL + "/actualizarproductos/" + newproductos._id,producto);

    //expect(response.data.codigo).to.be.equals("100");

  

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
  it("Eliminar Producto", async () => {
    const response = await axios.delete(API_URL + "/deleteproductos/" + newproductos._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

});*/

describe("Como administrador quiero agregar productos:", function () {


  it("Producto Agregado", async () => {
    const productos = {
      name: "Mouse Inalambrico",
      codigo: 1,
      descripcion: "Mouses de 5 Botones",
      precio: 600,
      stock: 10,
      sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });

  ///////////////////Error por falta de nombre del producto//////////////////////////////////
  it("Falta el nombre del producto", async () => {
    try {
      const productos = {
        //name: "Mouse Inalambrico",
        codigo: 1,
        descripcion: "Mouses de 5 Botones",
        precio: 600,
        stock: 10,
        sucursal: "Rosarito"
      };
      const response = await axios.post(API_URL + "/postproductosinfo", productos);
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
///////////////////Error por falta de Codigo//////////////////////////////////
it("Falta el numero de Codigo", async () => {
  try {
    const productos = {
      name: "Mouse Inalambrico",
      //codigo: 1,
      descripcion: "Mouses de 5 Botones",
      precio: 600,
      stock: 10,
      sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
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
///////////////////Error por falta de Precio//////////////////////////////////
it("Falta el Precio del producto", async () => {
  try {
    const productos = {
      name: "Mouse Inalambrico",
      codigo: 1,
      descripcion: "Mouses de 5 Botones",
      //precio: 600,
      stock: 10,
      sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
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
it("Falta de poner la cantidad", async () => {
  try {
    const productos = {
      name: "Mouse Inalambrico",
      codigo: 1,
      descripcion: "Mouses de 5 Botones",
      precio: 600,
      //stock: 10,
      sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
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
it("Falta de poner a que sucursal", async () => {
  try {
    const productos = {
      name: "Mouse Inalambrico",
      codigo: 1,
      descripcion: "Mouses de 5 Botones",
      precio: 600,
      stock: 10,
      //sucursal: "Rosarito"
    };
    const response = await axios.post(API_URL + "/postproductosinfo", productos);
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



})

////////////////////Mostrando todos los Productos/////////////////////////////
describe("Como administrador quiero ver todos los productos:", function () {
  it("Productos Mostrados", async () => {
    const response = await axios.get(API_URL + "/listadeproductos");
    //console.log(response.data); muestra todos los productos en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });

});

////////////////////Mostrando detalles de un Producto/////////////////////////////
describe("Como administrador quiero ver detalle de un Producto:", function () {
  it("Detalles Mostrados", async () => {
    //console.log(newuser)

    const response = await axios.get(API_URL + "/producto/" + newproductos._id);

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
 
});
////////////////////Editando un Producto/////////////////////////////
describe("Como administrador quiero editar un Producto:", function () {
  it("Producto Editado", async () => {
    const producto = {
      codigo : 200,

    }
    const response = await axios.put(API_URL + "/actualizarproductos/" + newproductos._id,producto);

    //expect(response.data.codigo).to.be.equals("100");

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

})


////////////////////Eliminado un Producto/////////////////////////////
describe("Como administrador quiero ver detalle de un Producto:", function () {

  it("Producto Eliminado", async () => {
    const response = await axios.delete(API_URL + "/deleteproductos/" + newproductos._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

})