const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");
const cors = require("cors")

app.use(cors());

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middlewares to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//user login and signup route here first
app.use("/api/users", require("./routes/api/users"));

//normal routes here
app.use("/api/listings", require("./routes/api/listings"));
app.use("/api/hostings", require("./routes/api/hostings"));
app.use("/api/reservations", require("./routes/api/reservations"));

//"catch all" route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 8080 for express port
const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
