class UserService {
    /**
     * @type {UserService}
     */
    repository;
    constructor(repository) {
        this.repository = repository;
    }

    getUser = (params) => {
        console.log(params);
        const { userId } = params;
        const user = repository.findById(userId);
        return user;
    };

    getUserName = (params) => {
        const { userId } = params;
        console.log(userId);
        const name = repository.getUserName(userId);
        return `<h1 style="display: flex;">Hello, ${name}</h1>`;
    };
}

module.exports = { UserService };
