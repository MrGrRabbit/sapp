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

  module.exports = {validate}