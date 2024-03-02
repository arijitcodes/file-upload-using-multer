const express = require("express");
const multer = require("multer");

const app = express();

// Setup Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(multer().any());

// Setup Routes
app.get("/", (_, res) => {
  return res.json({ message: "Hello World" });
});

// API Healthcheck Route
app.get("/healthcheck", (_, res) => {
  return res.status(200).json({ message: "API is healthy" });
});

// Routes
app.use("/api/v1", require("./routes/v1"));

// Export the App from this Module
module.exports = app;
