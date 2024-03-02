const express = require("express");
const { errorHandler } = require("./errorHandlers/errorHandler");

const app = express();

// Setup Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving uploaded files through /files/:file_name route
// app.use(express.static("public"));
app.use("/files", express.static("public"));

// Setup Routes
app.get("/", (_, res) => {
  return res.json({ message: "Hello World" });
});

// API Healthcheck Route
app.get("/healthcheck", (req, res) => {
  console.log(req.protocol);
  console.log(req.hostname);
  console.log(req.originalUrl);
  return res.status(200).json({ message: "API is healthy" });
});

// Routes
app.use("/api/v1", require("./routes/v1"));

// Error Handler
app.use(errorHandler);

// Export the App from this Module
module.exports = app;
