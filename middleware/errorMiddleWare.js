export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(600);
  res.json({
    message: "omo",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
