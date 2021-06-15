'use strict';
const config = require("config");
const Sequelize = require("sequelize");


// @ts-ignore
const sequelize = new Sequelize(
  config.get("db.DB"),
  config.get("db.USER"),
  config.get("db.PASSWORD"),
  {
    host: config.get("db.HOST"),
    dialect: config.get("db.dialect"),
    pool: {
      max: config.get("db.pool.max"),
      min: config.get("db.pool.min"),
      acquire: config.get("db.pool.acquire"),
      idle: config.get("db.pool.idle")
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.Image = require("./image.model.js")(sequelize, Sequelize);
db.Todo= require("./todo.model.js")(sequelize, Sequelize);

db.Todo.belongsTo(db.user,{foreignKey:"usersId"});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "rolesId",
  otherKey: "usersId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "usersId",
  otherKey: "rolesId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;