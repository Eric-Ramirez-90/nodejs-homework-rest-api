const express = require('express');
const Joi = require('joi');

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require('../../models/contacts');

const HttpError = require('../../helpers/HttpError');

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().min(5).max(15).trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string()
    .min(10)
    .max(15)
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
    .trim()
    .required(),
});

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:id', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
