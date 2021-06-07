var db = require('../models');
var server = require('../server');
const axios = require('axios').default;
describe("Creating Role Testing",() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL=10000;
    beforeAll( async() => {
        console.log("@@@Clearing tables");
      
         await db.sequelize.sync({force:true,logging:false})
      })
      
    // })
//    beforeEach(() => {
//     db.sequelize.sync({force:true,logging:false}).then(res=>{
//     })
//    })
// afterAll((done) => {
    
//     db.sequelize.sync({force:true,logging:false}).then(res=>{
//         server.close();
//         done();
//     })
// })
    it("roles creation test",async() => {
        console.log("@@@STARTED CREATING USERS");
    // await db.role.findAll({}).then(res=> {
    //     console.log(res);
    // })
     
       await Promise.all([
            db.role.create({
               "name":"user",
               "id":1
           }),
            db.role.create({
             "name":"moderator",
             "id":2
         }),
          db.role.create({
             "name":"admin",
             "id":3
         })
       ])
     
    })
})