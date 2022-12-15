const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("This will Show all Leaders for you");
  })
  .post((req, res, next) => {
    res.end("This will Add new Leader with name: " + req.body.name);
  })
  .put((req, res, next) => {
    res.end("PUT operation not supported on /leaders ");
  })
  .delete((req, res, next) => {
    res.end("This will delete all Leaders");
  });

leaderRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "This will show to you the details of the Leader: " +
        req.body.name +
        " and Id: " +
        req.params.id
    );
  })
  .post((req, res, next) => {
    res.end("POST operation not supported on /leaders/" + req.params.id);
  })
  .put((req, res, next) => {
    res.end("This Will update details of Leader: " + req.body.name);
  })
  .delete((req, res, next) => {
    res.end("This Will delete details of Leader: " + req.body.name);
  });
module.exports = leaderRouter;
