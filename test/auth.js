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
    it("Autentificacion", async () => {
      const usuarios = {
        name: "Nuevo Usuario 11",
        email: "vrodriguez38@gmail.com",
      password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      }
      const response = await axios.post(API_URL + "/register", usuarios);
      expect(response.status).to.be.equal(201);
      expect(response.data).to.be.an("object");
      //console.log(response.data); muestra en consola
    });
})

 

/* const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('../models/todo');
const {User} = require('../models/user1');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
  _id: userOneID,
  email: "userone@gmail.com",
  password: "useronepassword",
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneID, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoID,
  email: "usertwo@gmail.com",
  password: "usertwopassword",
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoID, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}]

const todos = [{
  _id: new ObjectID(),
  text: "First test todo",
  _creator: userOneID
}, {
  _id: new ObjectID(),
  text: "Second test todo",
  _creator: userTwoID
}];

var populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

var populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
 */