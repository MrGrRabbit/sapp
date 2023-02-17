const { UserService } = require('./user.service');
const { UserRepository } = require('./user.repository');
const express = require('express');
const { validate } = require('../validate/validate.service');
const Joi = require('joi');

router = express.Router();
repository = new UserRepository();
service = new UserService(this.repository);

const userValidator = {
    params: Joi.object({ userId: Joi.number().min(0) }),
};

router.get('/:userId', validate(userValidator), async (req, res) => {
    const user = await service.getUser(req.params);
    return res.send(user);
});

router.get('/:userId/name', validate(userValidator), async (req, res) => {
    const name = await service.getUserName(req.params);
    return res.send(name);
});

module.exports = router;
