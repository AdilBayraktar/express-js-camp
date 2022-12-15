console.log("Test");
const express = require("express");
const http = require("http");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express Server Started</h1></body></html>");
  console.log(req);
  console.log("Response:", res);
  console.log(next);
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server Running on http://${hostname}:${port}`);
});
