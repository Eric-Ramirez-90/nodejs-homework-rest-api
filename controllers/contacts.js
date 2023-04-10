const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require('../models/contacts');

const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (req, res, next) => {
  const result = await listContacts();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
