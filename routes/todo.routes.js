const { authJwt } = require("../middleware");
const controller = require("../controllers/todo.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/todos",
  [authJwt.verifyToken],
   controller.getAllTodos);

  app.post(
    "/api/test/assigntodo",
    [authJwt.verifyToken],
    controller.assignTodo
  );

  
};