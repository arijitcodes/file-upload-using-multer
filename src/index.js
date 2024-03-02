const app = require("./app");

// Start the server
const PORT = process.env.PORT || 5000;
try {
  app.listen(PORT, () => {
    console.log(`\n🟢 Server started on port ${PORT} 🚀`);
  });
} catch (error) {
  console.error("🔴 Failed to start the server!");
  console.error(error);
}
