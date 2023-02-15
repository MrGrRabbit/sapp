const NotFoundError = require('./common/error.interface');
const UserModel = require('./user.model');
/**
 * @type {UserRepository}
 * @description class Repository include free database
 * @returns
 */
class Repository extends UserModel {
    /**
     * Return entity by id
     * @param {number} id - entity id
     */
    findById(id) {
        const result = this.database.find((val) => val.id == id);
        if (!result) throw new NotFoundError();
        else return result;
    }
}

class UserRepository extends Repository {
    getUserName(id) {
        console.log(this.database[id].name);
        return this.database[id].name;
    }
}

module.exports = { UserRepository };
