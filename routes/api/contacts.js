const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAllContacts);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateById
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete('/:id', isValidId, ctrl.deleteById);

module.exports = router;
