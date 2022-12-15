const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will Send all dishes for you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " With details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Will Delete all dishes");
  });

/****************** */
dishRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will Send One dish details for you: " + req.params.id);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/ " + req.params.id);
  })
  .put((req, res, next) => {
    res.write("Updating the dish with id: " + req.params.id + "\n");
    res.end(
      "Will update details of dish: " +
        req.body.name +
        " and details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will Delete the dish with id: " + req.params.id);
  });

module.exports = dishRouter;
