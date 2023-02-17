const { NotFoundError } = require('../common/error/error.adapter');
const UserModel = require('./user.model');
/**
 * @type {UserRepository}
 * @description class Repository include free database
 * @returns
 */
class Repository {
    /**
     * Return entity by id
     * @param {number} id - entity id
     */
    async findById(id) {
        const result = await UserModel.database.find((val) => val.id == id);
        if (!result) throw new NotFoundError();
        else return result;
    }
}

class UserRepository extends Repository {
    async getUserName(id) {
        const name = await UserModel.database[id].name;
        console.log(name);
        return name;
    }
}

module.exports = { UserRepository };
