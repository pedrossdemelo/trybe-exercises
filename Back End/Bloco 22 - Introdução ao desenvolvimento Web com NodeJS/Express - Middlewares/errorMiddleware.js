module.exports = (err, req, res, next) => {
  if (err.status)
    return res.status(err.status).json({
      code: err.code,
      message: err.message,
    });
  return res.status(500).json({
    code: "Untracked Error",
    message: "Internal Server Error",
  });
};
