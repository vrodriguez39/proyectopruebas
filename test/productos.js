const expect = require("chai").expect;
//const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createproductos } = require("./test_utils");

before(async () => {
  newproductos = await createproductos();
});


describe("Como administrador quiero administrar productos:", function () {


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

   /*  response.data.should.have.property("name");s
    response.data.should.have.property("codigo");
    response.data.should.have.property("descripcion");
    response.data.should.have.property("precio");
    response.data.should.have.property("stock");
    response.data.should.have.property("sucursal"); */

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
  it("Eliminar Producto", async () => {
    const response = await axios.delete(API_URL + "/deleteproductos/" + newproductos._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

}); 