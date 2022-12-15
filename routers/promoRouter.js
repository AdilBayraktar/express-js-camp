const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("This will Show all Promotions for you");
  })
  .post((req, res, next) => {
    res.end("This will Add new promotion with name: " + req.body.name);
  })
  .put((req, res, next) => {
    res.end("PUT operation not supported on /promotions ");
  })
  .delete((req, res, next) => {
    res.end("This will delete all promotions");
  });

promoRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "This will show to you the details of the promotion: " +
        req.body.name +
        " and Id: " +
        req.params.id
    );
  })
  .post((req, res, next) => {
    res.end("POST operation not supported on /promotions/" + req.params.id);
  })
  .put((req, res, next) => {
    res.end("This Will update details of promotion: " + req.body.name);
  })
  .delete((req, res, next) => {
    res.end("This Will delete details of promotion: " + req.body.name);
  });

module.exports = promoRouter;
