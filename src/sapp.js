const express = require('express');
const app = express();
const { UserRouter } = require('../src/router/router');

app.use('/user', new UserRouter().router);
app.use((error, req, res) => {
    console.log(error);
    if (error instanceof HttpError) {
        console.log(error);
        const { code, message } = error;
        return res.status(code).send(message);
    }
    console.error(error);
    return res.sendStatus(500);
});

module.exports = app;
