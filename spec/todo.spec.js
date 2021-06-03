var Request=require("request");
var SequelizeMock = require('sequelize-mock');
var DBConnectionMock = new SequelizeMock();
var db= require('../models');

describe("Server",()=>{
    var server;
    beforeAll(()=>{
        server=require('../server');
        // var todoMock=sequelize.$overrideImport('../models/todo.model.js', '../models/mock.js');
        // console.log(todoMock);
    })
    afterAll(()=>{
        // server.close();
    })

    describe("Assign Todo",() => {
      it("test",() => {
          let user=DBConnectionMock.define('user',{
              "username":"mod",
              "email":"mod@gmail.com",
              "password":"123"
          })
        let todo=DBConnectionMock.define("todos",{
            "todoname":"todo1",
            "description":"hello",
            "usersId":1
        })
        console.log(todo);
        expect(10+5).toBe(15);
      })
    })

    // describe("Assign Todo",() => {
    //   var data={};
    //   beforeAll((done) => {
    //     Request.get("http://localhost:8080",(error,response,body) => {
    //       data.status=response.statusCode;
    //       data.body=body;
    //       done();
    //     })
    //   })
    //   it("Status 200",() => {
    //     expect(data.status).toBe(200);
    //   })
    // })
    // it("checking some",()=>{
    //     expect(10+5).toBe(15)
    // })
})