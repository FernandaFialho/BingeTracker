module.exports = app => {
  const logins = require("./db/login.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", logins.create);

  // Retrieve all Users
  router.get("/", logins.getAllLogins);

  // Retrieve a single User with id
  router.get("/:id", logins.getLogin);

  //generate token
  router.post("/token", logins.generateToken);

  // Validate token
  router.get("/token/:token", logins.validateToken);

  // Update a User with id
  router.put("/:id", logins.update);

  // Delete a User with id
  router.delete("/:id", logins.delete);

  // Delete all Users
  router.delete("/", logins.deleteAll);
  return router;
  //app.use("/users", router);
};