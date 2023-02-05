const express = require('express');
const User = require('../components/user.controller');
const { validate } = require('../components/validate/validate');
const Joi = require("joi");

class UserRouter {
    router = express.Router();

    constructor() {
        const userValidator = {
            params: Joi.object({ userId: Joi.number().min(0) }),
        };

        this.router.get("/:userId", validate(userValidator),
            User.getUser);

        this.router.get("/:userId/name", validate(userValidator),
            User.getUserName);
    }

}

module.exports = { UserRouter }