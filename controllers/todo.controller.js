const db = require("../models");
const Todo = db.Todo;

exports.getAllTodos = (req, res) => {
    Todo.findAll({
        where:{
            usersId:req.userId
        }
    })
    .then(response=>{
  res.status(200).send(response);
    })
    .catch(err=>{
        console.log(err);
        res.json({msg: 'Error', detail: err});
    })
  };
  
  exports.assignTodo = (req, res) => {
    // todoId:req.body.assignto  
    console.log(req.body)
    Todo.create({
          todoname:req.body.todoname,
          description:req.body.description,
          usersId:req.body.assignto,
      })
      .then(response=>{
        res.status(200).send("Todo Created.");
      })
    .catch(err=>{
        console.log(err);
        res.json({msg: 'Error', detail: err});
    })
  };
  
  