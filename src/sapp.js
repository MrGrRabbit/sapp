const express = require("express");
const app = express();
const {UserController} = require('./components/user.controller');


app.use("/user", new UserController().router);
app.use((error, req, res, next) => {
  if (error instanceof HttpError) {
    const { code, message } = error;
    return res.status(code).send(message);
  }
  console.error(error);
  return res.sendStatus(500);
});

module.exports = app;