const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configure Multer Storage Settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

// Setup Multer Middleware with Storage Settings
// const upload = multer({ dest: "public/" });
const upload = multer({ storage: storage });

// Controllers Imports
const { uploadFile } = require("../../controllers/v1/upload");

// Setup the Route's Endpoints and Controlelr
router.route("/").post(upload.single("file"), uploadFile);

// Export the Router
module.exports = router;
