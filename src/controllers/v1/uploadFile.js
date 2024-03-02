const APIError = require("http-errors");

// File upload Route Controller
const uploadFile = (req, res) => {
  //   res.send("hello, you have reached the Upload Route... 📁 ☁");
  if (!req.file) {
    throw new APIError.ExpectationFailed("No File was Sent!");
    // return res.status(400).json({ error: "No file uploaded" });
  }

  return res.status(200).json({
    message: "File Uploaded Successfully",
    file:
      (process.env.API_BASE_URL ||
        req.protocol +
          "://" +
          req.hostname +
          ":" +
          (process.env.PORT || 5000)) +
      "/files/" +
      req.file.filename,
  });
};

// Export the Controllers
module.exports = { uploadFile };
