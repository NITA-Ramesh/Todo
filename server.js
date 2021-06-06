const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require('morgan');
const app = express();
const db = require("./models");
const Role = db.role;


// @ts-ignore
// global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));




db.sequelize.sync({force:true,logging:false}).then(() => {
  // console.log('Drop and Resync Db');
  // {force:true,logging:false}) for deleting and creating;
  initial();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(logger('dev'))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to auth application." });
});
// console.log('Routes',require('./routes/auth.routes'))
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/image.routes')(app);
require('./routes/todo.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
const server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }