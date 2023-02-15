const express = require('express');
const app = express();
const { UserController } = require('./components/user.controller');
const UserMiddleware = require('./components/common/middleware/errorHandle.middleware');

app.use('/user', new UserController().router);
app.use((error, req, res) => new UserMiddleware().handleHttpError(error));

module.exports = app;
