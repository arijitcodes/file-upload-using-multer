const express = require("express");
const router = express.Router();

// Setup the Route Handler
router.use("/upload", require("./upload"));

module.exports = router;
