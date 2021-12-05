/* const http = require('http');

let isDocker = true;
const hostname = (isDocker) ? '0.0.0.0' : '127.0.0.1';
const port = 3000;

require("./routes")(app);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */


const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./db/db");

db.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  const seed = require("./db/seeds");
  seed();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to login service." });
});

const routes = require("./router");
app.use("/auth", routes(app));

// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});