const express = require("express");
const Joi = require("joi");
const app = express();

class HttpError extends Error {
  code;
  message;

  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }
}

class NotFoundError extends HttpError {
  constructor(message = "Sorry, we have not found an entity") {
    super(404, message);
  }
}

class BadRequestError extends HttpError {
  constructor(message = "Request is invalid") {
    super(400, message);
  }
}

/**
 * Validate schema
 * @param {{body, query, params}} schema
 * @returns
 */
const validate = (schema) => {
  return (req, res, next) => {
    const errors = [];
    for (const key of Object.keys(schema)) {
      const { error, value } = schema[key].validate(req[key]);
      if (error) {
        error.details.forEach((e) => {
          errors.push(e.message);
        });
      }
      req[key] = value;
    }

    if (errors.length === 0) {
      next();
    } else {
      next(new BadRequestError(errors.join(", ")));
    }
  };
};

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

  getUserName(id) {
    return this.database[id].name;
  }
}

class UserService {
  /**
   * @type {UserRepository}
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

class UserController {
  router = express.Router();
  repository = new UserRepository();
  service = new UserService(this.repository);

  constructor() {
    const userValidator = {
      params: Joi.object({ userId: Joi.number().min(0) }),
    };

    this.router.get("/:userId", validate(userValidator), (req, res) => {
      const { userId } = req.params;
      const user = this.service.getUser(userId);
      return res.send(user);
    });

    this.router.get("/:userId/name", validate(userValidator), (req, res) => {
      const { userId } = req.params;
      const name = this.service.getUserName(userId);
      return res.send(`<h1 style="display: flex;">Hello, ${name}</h1>`);
    });
  }
}

app.use("/user", new UserController().router);
app.use((error, req, res, next) => {
  if (error instanceof HttpError) {
    const { code, message } = error;
    return res.status(code).send(message);
  }
  console.error(error);
  return res.sendStatus(500);
});

module.exports = app;