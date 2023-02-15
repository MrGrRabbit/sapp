const HttpError = require('../error.middleware');
/**
 * @description Это шляпа из сапп.джс -> апп усе
 */

class UserMiddleware {
    handleHttpError(error, req, res) {
        if (error instanceof HttpError) {
            console.log(error);
            const { code, message } = error;
            return res.status(code).send(message);
        }
        console.error(error);
        console.log(error);
        return res.sendStatus(500);
    }
}

module.exports = UserMiddleware;
