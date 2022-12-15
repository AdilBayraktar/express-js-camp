console.log("Test");
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
app.get("/dishes", (req, res, next) => {
  res.end("Will Send all dishes for you");
});
app.post("/dishes", (req, res, next) => {
  res.end(
    "Will add the dish: " +
      req.body.name +
      " With details: " +
      req.body.description
  );
});

app.put("/dishes", (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /dishes");
});
app.delete("/dishes", (req, res, next) => {
  res.end("Will Delete all dishes");
});
app.get("/dishes/:id", (req, res, next) => {
  res.end("Will Send One dish details for you: " + req.params.id);
});
app.post("/dishes/:id", (req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /dishes/ " + req.params.id);
});

app.put("/dishes/:id", (req, res, next) => {
  res.write("Updating the dish with id: " + req.params.id + "\n");
  res.end(
    "Will update details of dish: " +
      req.body.name +
      " and details: " +
      req.body.description
  );
});
app.delete("/dishes/:id", (req, res, next) => {
  res.end("Will Delete the dish with id: " + req.params.id);
});
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express Server Started</h1></body></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server Running on http://${hostname}:${port}`);
});
