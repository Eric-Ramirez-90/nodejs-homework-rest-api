const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().min(5).max(15).trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string()
    .min(10)
    .max(15)
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
    .trim()
    .required(),
  favorite: Joi.boolean(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(5).max(15).trim().optional(),
  email: Joi.string().email().trim().optional(),
  phone: Joi.string()
    .min(10)
    .max(15)
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
    .trim()
    .optional(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addSchema, updateSchema, updateFavoriteSchema };
