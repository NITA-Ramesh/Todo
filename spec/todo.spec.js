var Request = require("request");
var SequelizeMock = require('sequelize-mock');
var DBConnectionMock = new SequelizeMock();
const axios = require('axios').default;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
// var Jasmine=require('jasmine');
// var jasmine = new Jasmine();
// const app = require('../server');
// const should = chai.should();
// const expect = chai.expect;

var db = require('../models');
var server = require('../server');


// describe("using chai test",() => {
//   var token;  
//   beforeAll(() => {

//     // done();
//     return db.sequelize.sync({ logging: false }).then(() => {
//     })
//   })
  
//   it("creating  three ROLES", async () => {
//     console.log("creating ROLES");
//     await db.role.create({
//       "id": 1,
//       "name": "user"
//     }).then(() => {
      
//     })
//     await db.role.create({
//       "id": 2,
//       "name": "moderator"
//     }).then(() => {
      
//     })
//     await db.role.create({
//       "id": 3,
//       "name": "admin"
//     }).then(() => {
      
//     }).catch(err=>{
//       // console.log(err);
//     })
//     console.log("Done Entering three ROLES");
//   })
//   it("create a mod user", (done) => {
//     console.log("CREATING USER");
//       chai.request(server).post("/api/auth/signup")
//     .send({
//       "username": "mod",
//       "password": "123",
//       "email": "mod@gmail.com"
//     }).then(() => {
//       console.log("Done With Creating USER");
//       done();
//     }).catch(err=>{
//       console.error(err);
//       done(new Error(err))
//     })
//   })

//   it("Sing In", (done) => {
//     console.log("SIGN IN");
//       chai.request(server).post("/api/auth/signin")
//     .send ({
//       "username": "mod",
//       "password": "123"
//     }).then((res) => {
//       //  console.log("singnin",res);
//       token = res["body"]["accessToken"]
//       console.log("TK",token);
//       expect(res["status"]).toBe(200);
//       console.log("SIGN IN DONE");
//       done();
//     }).catch(err=>{
//       console.error(err);
//       done(new Error(err))
//     })

//   })

//   it("Assign todo", (done) => {
//     console.log("TOKEN",token);
//       chai.request(server).post("/api/test/assigntodo")
//      .set("x-access-token",token)
//     .send ({
//       "todoname": "todo",
//       "description": "todo description",
//       "assignto": 1
//     }).then(() => {
//       console.log(" TODO Assigned");
//       done();
//     }).catch(err=>{
//       console.error(err);
//       done(new Error(err))
//     })
//   })
  
// })

xdescribe("Check ToDo Functionality ", () => {
  // var server;
  // jasmine.DEFAULT_TIMEOUT_INTERVAL=20000;

  // beforeAll(() => {

  //   // done();
  //   return db.sequelize.sync({ logging: false }).then(() => {
  //   })

  // })
  // beforeEach(() => {
  //   return db.sequelize.sync({ logging: false }).then(() => {
  //   })
  // })

  afterAll(() => {

    // db.sequelize.sync({ force: true, logging: false }).then(() => {
    //   server.close();
    //   done();
    // })
  })


  var token;
  it("create three roles", async () => {
    console.log("creating role");
    let userole = await db.role.create({
      "id": 1,
      "name": "user"
    });
    let moderatorole = await db.role.create({
      "id": 2,
      "name": "moderator"
    })
    let adminrole = await db.role.create({
      "id": 3,
      "name": "admin"
    })
    console.log("Done Entering three roles");
  })
  it("create a mod user", () => {
    var status;
    console.log("Creating USER");
    return axios.post("http://localhost:8080/api/auth/signup", {
      "username": "mod",
      "password": "123",
      "email": "mod@gmail.com"
    }, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      // console.log(res["data"]);
      status = res["status"]
      console.log("DONE CREATING USER");

    }).catch(err=>{

    })
    // expect(status).toBe(200);


  })

  it("Sing In", () => {
    console.log("SIGNIN STARTING");
    return axios.post("http://localhost:8080/api/auth/signin", {
      "username": "mod",
      "password": "123"
    }, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      // console.log(res["data"]);
      token = res["data"]["accessToken"]
      expect(res["status"]).toBe(200);
      console.log("SIGNIN DONE");

    }).catch(err=>{
      
    })

  })

  it("Assign todo", () => {
    console.log("ASSIGNING TODO");
    return axios.post("http://localhost:8080/api/test/assigntodo", {
      "todoname": "todo",
      "description": "todo description",
      "assignto": 1
    }, {
      headers: {
        'content-type': 'application/json',
        "x-access-token": token
      }
    }).then(res => {

      console.log("DATA",res["data"]);
      expect(res["status"]).toBe(200);
      console.log("ASSIGNED");
    }).catch(err=>{
      
    })
  })

  // it("Testing testcase", () => {
  //   expect(10 + 5).toBe(15)
  // })
})

  // describe("create roles", () => {
  //   it("Entering three roles", async () => {
  //     let userole = await db.role.create({
  //       "id": 1,
  //       "name": "user"
  //     });
  //     let moderatorole = await db.role.create({
  //       "id": 2,
  //       "name": "moderator"
  //     })
  //     let adminrole = await db.role.create({
  //       "id": 3,
  //       "name": "admin"
  //     })
  //     console.log("Done Entering three roles");

  //   })
  // })


// describe("Assign Todo", () => {
//   it("create todo", async () => {
//     let todo = await db.Todo.create({
//       "todoname": "todo",
//       "description": " todo description",
//       "usersId": 1
//     })
//     console.log("Assigned todo");
//   })
// })

// describe("Test All Todo Get Endpoint", () => {
//   var data = {};
//   beforeAll(async (done) => {
//   })
//   it("Check if Status is 200", async () => {
//     await axios.post("http://localhost:8080/api/auth/signin", {
//       "username": "mod",
//       "password": "123",
//        "email":"mod@gmail.com"
//     }, {
//       headers: {
//         'content-type': 'application/json'
//       }
//     }).then(res => {
//       console.log(res);

//     }).catch(err => {
//       console.error(err);
//     })
//     expect(data.status).toBe(200);
//   })
// })