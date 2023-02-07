class UserService {
    /**
     * @type {UserService}
     */
    repository;
    constructor(repository) {
        this.repository = repository;
    }

    getUser(userId) {
        return this.repository.findById(userId);
    }

    getUserName(userId) {
        console.log(userId);
        return this.repository.getUserName(userId);
    }
}

module.exports = { UserService }