const express = require("express");
const router = express.Router();

// Controllers Imports
const { upload } = require("../../controllers/v1/upload");

// Setup the Routes Endpoints and Controlelr
router.route("/").post(upload);

// Export the Router
module.exports = router;
