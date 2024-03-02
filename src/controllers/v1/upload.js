// File upload Route Controller
const uploadFile = (req, res) => {
  //   res.send("hello, you have reached the Upload Route... 📁 ☁");
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  return res
    .status(200)
    .json({ message: "File Uploaded Successfully", file: req.file });
};

// Export the Controllers
module.exports = { uploadFile };
