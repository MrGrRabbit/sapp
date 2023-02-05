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
        return this.repository.getUserName(userId);
    }
}

module.exports = { UserService }