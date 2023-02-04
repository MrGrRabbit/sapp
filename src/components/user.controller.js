const express = require("express");
const { UserRepository } = require('./userRepository');
const { UserService } = require('./user.service');
const Joi = require("joi");
const { validate } = require('./validate/validate');

/**
 * Validate schema
 * @param {{body, query, params}} schema
 * @returns
 */

/**
 * 
 */
class UserController {
    router = express.Router();
    repository = new UserRepository();
    service = new UserService(this.repository);

    constructor() {
        const userValidator = {
            params: Joi.object({ userId: Joi.number().min(0) }),
        };

        this.router.get("/:userId", validate(userValidator), (req, res) => {
            const { userId } = req.params;
            const user = this.service.getUser(userId);
            return res.send(user);
        });

        this.router.get("/:userId/name", validate(userValidator), (req, res) => {
            const { userId } = req.params;
            const name = this.service.getUserName(userId);
            return res.send(`<h1 style="display: flex;">Hello, ${name}</h1>`);
        });
    }
}

module.exports = { UserController }