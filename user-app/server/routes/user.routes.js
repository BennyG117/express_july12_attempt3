const userController = require("../../../controllers/user.controller");
// MOVE to controller.js: const users = require('../models/user.model')

const root = require("./routes");

module.exports = (app) => {
  app.get("/api", userController.hello);
  // app.get("/api", (req, res)=> {
  //     res.json({message: "Hello World"});
  // });

  app.get("/api/users", userController.allUsers);
  // app.get("/api/users", (req, res)=> {
  //     res.json(users)

  app.get("/api/users/:id", userController.oneUser);
  // app.get("/api/users/:id", (req, res)=> {
  //     // res.json(req.params.id)
  //     res.json(users[req.params.id])
  // })

  //post differentiats the same /api/users*
  app.post("/api/users", userController.newUser);
  // app.post("/api/users", (req, res)=> {
  //     //log their request then send it back
  //     // console.log(req.body);

  //     //this is now a basic create:
  //     users.push(req.body)
  //     res.json(req.body)
  // })

  //update using put
  app.put("/api/users/:id", userController.updateUser);

  // app.put("/api/users/:id",(req,res)=> {
  //     const id = req.params.id
  //     users[id] = req.body
  //     res.json({msg: "ok"})
  // })

  //delete example
  app.delete("/api/users/:id", userController.deleteUser);
  // app.delete("/api/users/:id",(req,res)=> {
  //     const id = req.params.id
  //     users.splice(id,1)
  //     res.json({msg: "ok"})
  // })

  //default to confirm server is working - see connection to routes.js

  app.get("/", root);
};
