const express = require('express');
const app = express();
const { UserController } = require('./components/user/user.controller');
const AppMiddleware = require('./components/common/error.middleware');
console.log(AppMiddleware);

app.use('/user', new UserController().router);
// Если res возвращать из error, то res - undefined
app.use((error, req, res, next) => res.send(AppMiddleware(error)));

module.exports = app;
