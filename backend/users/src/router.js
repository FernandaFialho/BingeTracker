module.exports = app => {
    const users = require("./db/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.getAllUsers);
  
    // Retrieve a single User with id
    router.get("/:id", users.getUser);

    // Retrieve friends from User with id
    router.get("/friends/:id", users.getUserFriends);

    // Add new friend User with id
    router.post("/friends/:id", users.addFriend);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    // Delete all Users
    router.delete("/", users.deleteAll);
    return router;
    //app.use("/users", router);
  };