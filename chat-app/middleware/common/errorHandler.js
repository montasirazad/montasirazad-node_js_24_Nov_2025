const createError = require("http-errors");

function notFoundHandler(req, res, next) {
  next(createError(404, "Requested url not found !"));
}

// default error handler

function errorHandler(err, req, res, next) {
  res.locals.title = "Error page";
  res.render("error");
//   res.render("error", {
//     title: "Error page",
//   });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
