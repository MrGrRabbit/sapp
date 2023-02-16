class UserService {
    /**
     * @type {UserService}
     */
    repository;
    constructor(repository) {
        this.repository = repository;
    }

    getUser = (req, res) => {
        const { userId } = req.params;
        const user = this.repository.findById(userId);
        return res.send(user);
    };

    getUserName = (req, res) => {
        const { userId } = req.params;
        console.log(userId);
        const name = this.repository.getUserName(userId);
        return res.send(`<h1 style="display: flex;">Hello, ${name}</h1>`);
    };
}

module.exports = { UserService };
