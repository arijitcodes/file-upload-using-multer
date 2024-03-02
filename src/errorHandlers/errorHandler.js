// Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({ error: err.message });
};

// Export Error Handler Middleware
module.exports = { errorHandler };
