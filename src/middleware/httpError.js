/**
 * @constructor
 * @description Error handling
 */
class HttpError extends Error {
    code;
    message;

    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}

class NotFoundError extends HttpError {
    constructor(message = "Sorry, we have not found an entity") {
        super(404, message);
    }
}

class BadRequestError extends HttpError {
    constructor(message = "Request is invalid") {
        super(400, message);
    }
}