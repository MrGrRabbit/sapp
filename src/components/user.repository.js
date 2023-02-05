// user.repository or userRepository???
/**
 * @type {UserRepository}
 * @description class Repository include free database
 * @returns
 */
class Repository {
    database;

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

    database = [
        { id: 0, name: "Daniel" },
        { id: 1, name: "Sergey" },
    ];
    findById(id) {
        const result = this.database.find((val) => val.id == id);
        if (!result) throw new NotFoundError();
        else return result;
    }

    getUserName(id) {
        return this.database[id].name;
    }
}

module.exports = { UserRepository }