const { HttpError } = require('./error.middleware');

class NotFoundError extends HttpError {
    constructor(message = 'Sorry, we have not found an entity') {
        super(404, message);
    }
}

class BadRequestError extends HttpError {
    constructor(message = 'Request is invalid') {
        super(400, message);
    }
}

module.exports = { NotFoundError, BadRequestError };
