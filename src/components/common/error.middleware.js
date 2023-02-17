const { HttpError } = require('./error/error.interface');

function handleHttpError(error, res) {
    if (error instanceof HttpError) {
        const { code, message } = error;
        console.log({ code, message });

        //return res.status(code).send(message);
        return { code, message };
    }
    console.log(error);
    //console.log('ОТВЕТ: ' + res);
    //return res.sendStatus(500);

    const code = 500;
    const message = 'status 500';
    return { code, message };
}

module.exports = handleHttpError;
