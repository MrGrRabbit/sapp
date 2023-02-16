const express = require('express');
const app = express();
const { UserController } = require('./components/user/user.controller');
const AppMiddleware = require('./components/common/middleware/error.middleware');

app.use('/user', new UserController().router);
/*app.use((error, req, res, next) => {
    console.log('Лог Еррор' + UserMiddleware.handleHttpError(error));
    res.send(UserMiddleware.handleHttpError(error);
});*/
app.use((error, req, res, next) => {
    const { code, message } = AppMiddleware.handleHttpError(error);
    return res.status(code).send(message);
});

module.exports = app;
