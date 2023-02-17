class UserService {
    /**
     * @type {UserService}
     */
    repository;
    constructor(repository) {
        this.repository = repository;
    }

    async getUser(params) {
        console.log(params);
        const { userId } = params;
        const user = await repository.findById(userId);
        return user;
    }

    async getUserName(params) {
        const { userId } = params;
        console.log(userId);
        const name = await repository.getUserName(userId);
        return `<h1 style="display: flex;">Hello, ${name}</h1>`;
    }
}

module.exports = { UserService };
