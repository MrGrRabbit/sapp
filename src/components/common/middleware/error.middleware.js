const { HttpError } = require('../error.service');
/**
 * @description Это шляпа из сапп.джс -> апп усе
 */
class AppMiddleware {
    constructor(error) {
        this.error = error;
    }
    handleHttpError(error, req, res, next) {
        if (error instanceof HttpError) {
            //console.log(error);
            const { code, message } = error;
            console.log({ code, message });
            //console.log('ОТВЕТ: ' + res);
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
}

module.exports = new AppMiddleware();
