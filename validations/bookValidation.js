const Joi = require("joi");

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string(),
    publishedYear: Joi.number()
});

module.exports = bookSchema;
