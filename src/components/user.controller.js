const { UserService } = require('./user.service');
const { UserRepository } = require('./user.repository');
const express = require('express');
const { validate } = require('./validate/validate.service');
const Joi = require('joi');

/**
 * @description А эта шляпа в сервис
 * @type {UserController}
 * @constructor
 */

class UserController {
    router = express.Router();
    repository = new UserRepository();
    service = new UserService(this.repository);

    /**
     * from router
     */

    constructor() {
        const userValidator = {
            params: Joi.object({ userId: Joi.number().min(0) }),
        };

        this.router.get('/:userId', validate(userValidator), this.service.getUser);

        this.router.get('/:userId/name', validate(userValidator), this.service.getUserName);
    }
}

module.exports = { UserController };
