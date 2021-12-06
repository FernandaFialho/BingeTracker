module.exports = app => {
  const recommendation = require("./recommendation.controller.js");

  var router = require("express").Router();

  // Retrieve books recommendation for a user
  router.get("/:id/livros", recommendation.getLivros);

  // Retrieve series recommendation for a user
  router.get("/:id/series", recommendation.getSeries);

   // Retrieve movies recommendation for a user
   router.get("/:id/movies", recommendation.getMovies);

  return router;
  //app.use("/users", router);
};