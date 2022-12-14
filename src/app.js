const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config({ path: path.join(__dirname, "/.env") });
require("./db/dbConfig");

const {
  policyRoutes,
  uploadRoutes,
  userRoutes,
  messageRoutes,
} = require("./routes/index");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.static(path.join(__dirname, "/public")));
app.use("/policy", policyRoutes);

app.use("/upload", uploadRoutes);

app.use("/user", userRoutes);

app.use("/message", messageRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
