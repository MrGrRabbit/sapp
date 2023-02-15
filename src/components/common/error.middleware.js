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

module.exports = { HttpError };
