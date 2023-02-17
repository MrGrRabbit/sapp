const express = require('express');
const app = express();
const route = require('./components/user/user.controller');
const AppMiddleware = require('./components/common/error.middleware');

app.use('/user', route);
// Если res возвращать из error, то res - undefined
app.use((error, req, res, next) => res.send(AppMiddleware(error)));

module.exports = app;
