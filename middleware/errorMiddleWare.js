export const errorHandler = (err, req, res, next) => {
  console.log(res.status, res.statusCode);
  const statusCode = res.status ? res.status : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
