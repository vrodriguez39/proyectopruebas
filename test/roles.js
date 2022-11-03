const expect = require("chai").expect;
 //const { before } = require("mocha");
 let chai = require("chai");
 let should = chai.should();
 const axios = require("axios");
 const { API_URL, createroles } = require("./test_utils");

 before(async () => {
  newroles = await createroles();
 });


 describe("Como administrador quiero administrar roles:", function () {


  it("Agregar rol", async () => {
    const roles = {
    name: "admin",
    status: "Activo1",
    };

    const response = await axios.post(API_URL + "/postroles", roles);
    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
    //console.log(response.data); muestra en consola
  });
 

   it("Mostrar todos los roles", async () => {
    const response = await axios.get(API_URL + "/listaderoles");
    //console.log(response.data); muestra todos los roles en la consola
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("Array");
  });

   /*it("Mostrar detalle de producto", async () => {
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


    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
  it("Eliminar Producto", async () => {
    const response = await axios.delete(API_URL + "/deleteproductos/" + newproductos._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  }); */

}); 