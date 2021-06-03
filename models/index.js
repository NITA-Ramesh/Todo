const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.Image = require("../models/image.model.js")(sequelize, Sequelize);
db.Todo= require("../models/todo.model.js")(sequelize, Sequelize);

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