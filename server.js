const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require('morgan');
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
const db = require("./models");
const Role = db.role;


db.sequelize.sync({force:true}).then(() => {
  // console.log('Drop and Resync Db');
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
console.log('Routes',require('./routes/auth.routes'))
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/image.routes')(app);
require('./routes/todo.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
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