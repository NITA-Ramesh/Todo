const db = require(".");
const User = db.user;
module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todos", {
      todoname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
      
    },
    {
        sequelize,
        modelName: 'todos',
      });
  
    return Todo;
  };