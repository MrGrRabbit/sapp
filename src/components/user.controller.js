const { UserRepository } = require('./user.repository');
const { UserService } = require('./user.service');

/**
 * @type {UserController}
 * @constructor 
 */

class UserController {

    repository = new UserRepository();
    service = new UserService(this.repository);

    getUser = (req, res) => {
        const { userId } = req.params;
        const user = this.service.getUser(userId);
        return res.send(user);
    }

    getUserName = (req, res) => {
        const { userId } = req.params;
        const name = this.service.getUserName(userId);
        return res.send(`<h1 style="display: flex;">Hello, ${name}</h1>`);
    }

}

module.exports = new UserController(); 